import * as React from 'react';
import { useState, useEffect } from 'react';
import TreeGraph from './TreeGraph';
import LineGraph from './LineGraph';
import { ITree } from '../interfaces';

let treeGraphData: ITree[] = [{
  name: '',
  children: [],
}];

// initialize port that will be upon when component Mounts
let port;

let items = [];

const timeLineArray = [];

const options = {
  width: '100%',
  height: '500px',
  stack: true,
  showCurrentTime: false,
  showMajorLabels: false,
  zoomable: false,
  start: new Number(0),
  end: new Number(10),
  min: new Number(0),
  max: new Number(40),
  type: 'range',
  selectable: true,
  horizontalScroll: false,
  verticalScroll: true,
  // editable: true,
};

let event;

interface Event {
    title: string,
    content: string,
    start: any,
    end: any,
}

function getData(Node, baseTime) {
  event = {};
  event.start = new Number((Number(Node.attributes.renderStart) - Number(baseTime)).toFixed(2));
  event.end = new Number((Number(Node.attributes.renderStart) + Number(Node.attributes.renderTotal) - Number(baseTime)).toFixed(2));
  event.content = Node.name;
  event.title = Node.name;
  items.push(event);
  if (Node.children.length !== 0) {
    Node.children.forEach((child) => {
      getData(child, baseTime);
    });
  }
}

export const MainContainer: React.FC = () => {
  const [tree, setTree] = useState<ITree[]>(treeGraphData);
  const [onMount, setOnMount] = useState(false);

  useEffect(() => {
    // open connection with background script
    // make sure to open only one port
    if (!port) port = chrome.runtime.connect();
    // listen for a message from the background script
    port.onMessage.addListener((message) => {
      if (JSON.stringify([message.payload.payload]) !== JSON.stringify(treeGraphData)) {
        // save new tree
        treeGraphData = [message.payload.payload];
        setTree(treeGraphData);
        getData(treeGraphData[0], treeGraphData[0].attributes.renderStart);
        timeLineArray.shift();
        timeLineArray.push(items);
        items = [];
        // render first timeline
        setOnMount(true);
      }
    });
  });

  return (
    <>
      <h1 style={{ textAlign: 'center', fontSize: '28px' }}>React ChronoScope</h1>
      <hr style={{ border: '2px solid black' }} />
      <h2>Tree Diagram</h2>
      <div id="treeGraphDiv" style={{ backgroundColor: 'whitesmoke' }}>
        <TreeGraph data={tree} />
      </div>
      <hr style={{ border: '2px solid black' }} />
      <div id="lineGraphDiv">
        <h2>TimeLine</h2>
        { onMount && timeLineArray.map((el, i, arr) => <LineGraph data={el} options={options} />)}
      </div>
    </>
  );
};
