import * as React from 'react';
import { useState, useEffect } from "react";
import TreeGraph from './TreeGraph';
import LineGraph from './LineGraph';
import { ITree } from '../interfaces';

let treeGraphData: ITree[] = [{
  name: '',
  children: [],
}];

// initialize port that will be upon when component Mounts
let port;

export const MainContainer: React.FC = () => {
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
        <>
            <h1 style={{textAlign : "center", fontSize: "28px"}}>React ChronoScope</h1>
            <hr style={{border: "2px solid black"}}></hr>
            <h2>Tree Diagram</h2>
            <div id='treeGraphDiv' style={{backgroundColor:"whitesmoke"}}>
                <TreeGraph data={tree}/>
            </div>
            <hr style={{border: "2px solid black"}}></hr>
            <div id='lineGraphDiv'>
                <h2>TimeLine</h2>
                <LineGraph />
            </div>
        </>
    )
}


