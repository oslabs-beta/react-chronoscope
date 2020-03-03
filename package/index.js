let wasMounted = false;

class Node {
    constructor(name, parent, children, fiber) {
        this.name = name;
        this.parent = parent;
        this.children = children;
        this.attributes = {
            state: JSON.stringify(fiber.memoizedState),
            props: JSONStringify(fiber.memoizedProps),
            stateOrPropsChanged: 'true',
            effectTag: fiber.effectTag,
            type: typeof fiber.type,
            // renderStart: fiber.actualStartTime,
            // renderTotal: fiber.actualDuration,
        };
        this.nodeSvgShape = {
            shape: 'ellipse',
            shapeProps: {
                rx: 10, 
                ry: 10,
                fill: 'lightgreen',
            },
        };
    }

    initializeProps(fiber) {
        let props = '';
        if (fiber.memoizedProps.children) {
            if (typeof fiber.memoizedProps.children[0] === 'object') {
                fiber.memoizedProps.children.forEach(object => {
                    props += JSON.stringify(object.props);
                });
            }
            else props = JSON.stringify(fiber.memoizedProps.children); 
        }
        else {
            props = JSON.stringify(fiber.memoizedProps);
        }

        return props;
    }
}

function JSONStringify(object) {
    let cache = [];        
    const string = JSON.stringify(object,
        // custom replacer - gets around "TypeError: Converting circular structure to JSON" 
        function(key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return;
                }
                // Store value in collection
                cache.push(value);
            }
            return value;
        }, 4);
    cache = null; //ngarbage collection
    return string;
}

let prevTreeGraph = null;

function treeCreator(hostRoot) {
    // helper function - that accepts the node - Host Root
    function treeGraphFromHostRootCreator(fiber) {
        // create a treeGraph
        const treeGraph = new Node(fiber.type.name, null, [], fiber); // Represent the top most Element (like App);
        const helper = (fiber, treeGraph) => {
            // check if fiber.child !== null - traverse
            if (fiber.child) {
                // push the new Node to the treeGraph.children array
                // the parent will the tree graph we are currently working with (do the type check for elements that are functions or html elements)
                let newGraphNode = treeGraph;
                if (typeof fiber.child.type !== 'object' && (fiber.child.child ? typeof fiber.child.child.type !== 'object' : true)) {
                    newGraphNode = new Node(fiber.child.key || (fiber.child.type ? fiber.child.type.name : fiber.child.type) || fiber.child.type, treeGraph, [], fiber.child);
                    treeGraph.children.push(newGraphNode);
                }
                // recursively invoke the helper on child
                helper(fiber.child, newGraphNode);
            }
            // check if fiber.sibling !== null - traverse
            if (fiber.sibling) {
                let newGraphNode = treeGraph;
                if (typeof fiber.sibling.type !== 'object' && (fiber.sibling.child ? typeof fiber.sibling.child.type !== 'object' : true)) {
                    // create new GraphNode based on it with parent being a treeGraph.parent
                    newGraphNode = new Node(fiber.sibling.key || (fiber.sibling.type ? fiber.sibling.type.name : fiber.sibling.type) || fiber.sibling.type, treeGraph.parent, [], fiber.sibling);
                    // push the node on to the treeGraph.parent.children array
                    treeGraph.parent.children.push(newGraphNode);
                }
                helper(fiber.sibling, newGraphNode);
            }
            // name of the element can be found in child.type.name
        };
        // invoke the helper function
        helper(fiber, treeGraph); // fiber is an App Fiber
        return treeGraph;
    }
    let treeGraph;
    // check if the hostRoot has a child
    if (hostRoot.child) {
        // yes? invoke the search function on the child - App Fiber
        // assign the returned result to tree
        treeGraph = treeGraphFromHostRootCreator(hostRoot.child);
    }

    function recursivelyDeleteParent(root) {
        if (root.parent) {
            delete root.parent;
        }
        if (root.children) {
            root.children.forEach(child => recursivelyDeleteParent(child));
        }
    }
    recursivelyDeleteParent(treeGraph);
    delete treeGraph.parent;

    const tempTreeGraph = JSON.parse(JSON.stringify(treeGraph));
    // recursively compare state and props in prevTreeGraph and treeGraph
    const compareStateAndProps = (node, prevNode, parentShapeProps) => {
        // compare state and props properties on attributes properties for both nodes
        // if same - treeGraph.attributes.stateOrPropsChanged - false
        if (node && prevNode) {
            // check if the node's type is a string
            // yes? give it a color of the parent - because Composite Component renders(or not) Host Component
            if (node.attributes.type === 'string') {
                node.nodeSvgShape.shapeProps = parentShapeProps;
            }
            else if (prevNode.attributes.state === node.attributes.state && prevNode.attributes.props === node.attributes.props) {
                node.attributes.stateOrPropsChanged = 'false';
                if ((node.attributes.effectTag === 0 || node.attributes.effectTag === 4) && wasMounted) {
                    node.nodeSvgShape.shapeProps.fill = 'gray';
                }
                else {
                    node.nodeSvgShape.shapeProps.fill = 'red';
                    node.nodeSvgShape.shapeProps.rx = 12;
                    node.nodeSvgShape.shapeProps.ry = 12;
                }
            }

            delete node.attributes;

            // recursively invoke the function for each children
            if (node.children.length) {
                for (let i = 0; i < node.children.length; i += 1) {
                    compareStateAndProps(node.children[i], prevNode.children[i], node.nodeSvgShape.shapeProps);
                } 
            }
        }
        else if (node) {
            delete node.attributes;

            // recursively invoke the function for each children
            if (node.children.length) {
                for (let i = 0; i < node.children.length; i += 1) {
                    compareStateAndProps(node.children[i], null, node.nodeSvgShape.shapeProps);
                } 
            }
        }

        if (!wasMounted) {
            delete node.attributes;
            if (node.children.length) {
                for (let i = 0; i < node.children.length; i += 1) {
                    compareStateAndProps(node.children[i]);
                } 
            }
        }
    };

    compareStateAndProps(treeGraph, prevTreeGraph, null);
    prevTreeGraph = tempTreeGraph;
    wasMounted = true;
    window.postMessage({ action: 'npmToContent', payload: treeGraph });
}

module.exports = function(container) {
    const fiberRoot = container._reactRootContainer._internalRoot;
    const hostRoot = fiberRoot.current;

    setTimeout(() => treeCreator(hostRoot), 500); // needs to wait for the page load
    window.addEventListener('click', () => {
        // check if the hostRoot is new - only then invoke
        setTimeout(() => {
            console.log('click', hostRoot !== fiberRoot.current);
            console.log(hostRoot, fiberRoot.current);
            if (hostRoot !== fiberRoot.current) {
                console.log('Host Root: ', fiberRoot.current);
                treeCreator(fiberRoot.current);
            }
        }, 200);
    });
    window.addEventListener('keyup', () => {
        setTimeout(() => {
            // check if the hostRoot is new - only then invoke
            console.log('key', hostRoot !== fiberRoot.current);
            if (hostRoot !== fiberRoot.current) {
                treeCreator(fiberRoot.current);
            }
        }, 200);
    });
};
