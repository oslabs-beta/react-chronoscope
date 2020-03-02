import * as React from "react";
import { useState, useEffect } from "react";
import Tree from 'react-d3-tree';

interface treeData{
  name: string,
  children: treeData[];
}

let treeGraphData: treeData[];

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

let port;

const TreeGraph: React.FC = () => {
  const [tree, setTree] = useState<treeData[]>(treeGraphData);

  useEffect(() => {
    // open connection with background script
    if (!port) port = chrome.runtime.connect();
    port = chrome.runtime.connect();
    // listen for a message from the background script
    port.onMessage.addListener(message => {
      // save the new tree
      if (JSON.stringify([message.payload.payload]) !== JSON.stringify(treeGraphData)) {
        treeGraphData = [message.payload.payload];
        setTree(treeGraphData);
      }
    })
  }); 

  return (
    <div id='treeGraph' style={{'height': '500px'}}>
      <Tree data={tree} orientation="vertical" translate={{ x: 300, y: 20}} zoom={0.45}/>
    </div>
  );
}

export default TreeGraph;