import * as React from "react";
import { useState, useEffect } from "react";
import Tree from 'react-d3-tree';

interface treeData{
  name: string,
  children: treeData[];
}

let treeGraphData: treeData[];
let tempData: treeData[];

// initial tree data
treeGraphData = [
  {
    name: 'App',
    children: [
      {
        name: '',
        children: []
      }
    ]
  }
];

interface State {
  data: treeData[];
}

// let port;

const TreeGraph: React.FC = () => {
  const [tree, setTree] = useState<treeData[]>(treeGraphData);

  const port = chrome.runtime.connect();
  // listen for a message from the background script
  port.onMessage.addListener(message => {
    console.log('from port on message');
    if (JSON.stringify([message.payload.payload]) !== JSON.stringify(treeGraphData)) {
      // save the new tree
      treeGraphData = [message.payload.payload];
      setTree(treeGraphData);
    }
  })

  useEffect(() => {
    console.log('use effect');
    // open connection with background script
    // if (!port) port = chrome.runtime.connect();
    // const port = chrome.runtime.connect();
    // // listen for a message from the background script
    // port.onMessage.addListener(message => {
    //   // save the new tree
    //   if (JSON.stringify([message.payload.payload]) !== JSON.stringify(treeGraphData)) {
    //     treeGraphData = [message.payload.payload];
    //     setTree(treeGraphData);
    //   }
    // })
  }); 

  return (
    <div id='treeGraph' style={{'height': '500px'}}>
      <Tree data={tree} orientation="vertical" translate={{ x: 300, y: 20}} zoom={0.45}/>
    </div>
  );
}

// class TreeGraph extends React.Component <{}, State> {
//   state: State = {
//     data : treeGraphData
//   };

//   componentDidMount() {
//     // open connection with background script
//     const port = chrome.runtime.connect();
//     // listen for a message from the background script
//     port.onMessage.addListener(message => {
//       // save the new tree
//       treeGraphData = [message.payload.payload];
//       this.setState({
//         data: treeGraphData
//       });
//       // abort connection
//       port.disconnect();
//     })
//   }

//   componentDidUpdate() {
//     // setInterval(() => {
//       // open connection with background script
//       // const port = chrome.runtime.connect();
//       // listen for a message from the background script
//       chrome.runtime.onConnect.addListener(port => {
//         console.log('port from componentDidUpdate: ', port);
//         port.onMessage.addListener(message => {
//           console.log('message from componentDidUpdate: ', message);
//           // save the new tree
//           tempData = [message.payload.payload];
//           // reassign the treeGraph if tempData is different from previous treeGraph
//           if (JSON.stringify(tempData) !== JSON.stringify(treeGraphData)) {
//             treeGraphData = tempData;
//             this.setState({
//               data: treeGraphData
//             });
//           }
//         })
//       })
//     // }, 200);
//   }

//   render() {
//     return (
//       <div id='treeGraph' style={{'height': '500px'}}>
//         <Tree data={this.state.data} orientation="vertical" translate={{ x: 300, y: 20}} zoom={0.45}/>
//       </div>
//     );
//   }
// }

export default TreeGraph;