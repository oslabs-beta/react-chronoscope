import * as React from "react";
import { useState, useEffect } from "react";
import Tree from 'react-d3-tree';
import { ITree } from '../interfaces';

let treeGraphData: ITree[] = [{
  name: '',
  children: [],
}];

// initialize port that will be upon when component Mounts
let port;

const TreeGraph: React.FC = () => {
  const [tree, setTree] = useState<ITree[]>(treeGraphData);

  useEffect(() => {
    // open connection with background script
    // make sure to open only one port
    if (!port) port = chrome.runtime.connect();
    // listen for a message from the background script
    port.onMessage.addListener(message => {
      if (JSON.stringify([message.payload.payload]) !== JSON.stringify(treeGraphData)) {
        // save new tree
        treeGraphData = [message.payload.payload];
        console.log(treeGraphData);
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