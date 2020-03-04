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

let isMounted = false;
const timeLineArray = [];

let items = [{
  title: '',
  content: '',
  start: 100,
  end: 200,
}];

const options = {
  width: '100%',
  height: '250px',
  stack: true,
  showCurrentTime: false,
  showMajorLabels: false,
  zoomable: true,
  start: new Number(305),
  end: new Number(320),
  min: new Number(100),
  max: new Number(800),
  type: 'range',
  selectable: true,
  // horizontalScroll : true,
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

function getData(Node) {
  event = {};
  event.start = new Number(Math.floor(Node.attributes.renderStart));
  event.end = new Number(Math.floor(Node.attributes.renderStart + Node.attributes.renderTotal));
  event.content = Node.name;
  event.title = Node.name;
  items.push(event);
  if (Node.children.length !== 0) {
    Node.children.forEach((child) => {
      getData(child);
    });
  }
}

export const MainContainer: React.FC = () => {
  const [tree, setTree] = useState<ITree[]>(treeGraphData);

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
        getData(treeGraphData[0]);
        isMounted = true;
        timeLineArray.push(items);
        items = [];
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
        <LineGraph data={items} options={options} />
        {
            isMounted
            && <LineGraph data={items} options={options} />
        }
        {
            timeLineArray.map((el, i, arr) => {
                console.log('element: ', el);
                console.log('array: ', arr);
                return <LineGraph key={`Timeline${i}`} data={el} options={options} />;
            })
        }
      </div>
    </>
  );
};
