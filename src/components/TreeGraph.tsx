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