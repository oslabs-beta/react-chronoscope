import * as React from "react";
import Tree from 'react-d3-tree';

  
const myTreeData = [
  {
    name: 'App',
    attributes: {
      keyApp: 'val A',
    },
    children: [
      {
        name: 'A1',
        attributes: {
          keyA: 'val A',
        },
      },
      {
        name: 'A2',
      },
    ],
  },
];

  class TreeGraph extends React.Component {
    componentDidMount() {
      console.log('TreeGraph mounted');
      // open connection with background script
      const port = chrome.runtime.connect();

      // listen for a message containing snapshots from the background script
      port.onMessage.addListener(message => {
        console.log('This is message from TreeGraph componentDidMound - port message: ', message);
      })
    }

    render() {
      return (
        // <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
        <div id='treeGraph' style={{}}>

        <Tree data={myTreeData} orientation="vertical" translate={{ x: 100, y: 20}}/>
  
        </div>
      );
    }
  }

export default TreeGraph;