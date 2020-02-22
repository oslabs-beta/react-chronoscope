import * as React from "react";
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

class TreeGraph extends React.Component <{}, State> {

  state: State = {
    data : treeGraphData
  };

  componentDidMount() {
    // open connection with background script
    const port = chrome.runtime.connect();
    // listen for a message from the background script
    port.onMessage.addListener(message => {
        // save the new tree
      treeGraphData = [message.payload.payload];
      this.setState({
        data: treeGraphData
      });
      // abort connection
      port.disconnect();
    })
  }

  componentDidUpdate() {
    setInterval(() => {
      // open connection with background script
      const port = chrome.runtime.connect();
      // listen for a message from the background script
      port.onMessage.addListener(message => {
        // save the new tree
        tempData = [message.payload.payload];
        // reassign the treeGraph if tempData is different from previous treeGraph
        if (JSON.stringify(tempData) !== JSON.stringify(treeGraphData)) {
          treeGraphData = tempData;
          this.setState({
            data: treeGraphData
          });
        }
      })
    }, 200);
  }

  render() {
    return (
      <div id='treeGraph' style={{'height': '500px'}}>
        <Tree data={this.state.data} orientation="vertical" translate={{ x: 300, y: 20}} zoom={0.45}/>
      </div>
    );
  }
}

export default TreeGraph;