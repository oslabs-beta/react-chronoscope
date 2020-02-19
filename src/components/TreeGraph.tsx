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

    // componentDidMount() {
    //   // const port = chrome.runtime.connect({name: "tree"});
    //   // port.onMessage.addListener((msg) => {
    //   //   console.log(msg);
    //   // });
    //   // chrome.runtime.onMessage.addListener((msg) => {
    //   //   console.log(msg);
    //   // })

    //   // window.addEventListener("message", receiveMessage, false);

    //   // function receiveMessage(event) {
    //   //   console.log(event);
    //   // }
    // }
    componentDidMount() {
      setTimeout(() => {
        console.log('TreeGraph mounted');
        // open connection with background script
        const port = chrome.runtime.connect();
        // listen for a message containing snapshots from the background script
        port.onMessage.addListener(message => {
          console.log('This is message from TreeGraph componentDidMound - port message: ', message);
        })
      }, 2000);
    }

    render() {

      return (
        // <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
        <div id='treeGraph' style={{'height': '500px'}}>

        <Tree data={myTreeData} orientation="vertical" translate={{ x: 100, y: 20}}/>
  
        </div>
      );
    }
  }

export default TreeGraph;