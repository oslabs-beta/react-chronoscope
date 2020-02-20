import * as React from "react";
import Tree from 'react-d3-tree';

// const myTreeData = [
//   {
//     name: 'App',
//     attributes: {
//       keyApp: 'val A',
//     },
//     children: [
//       {
//         name: 'A1',
//         attributes: {
//           keyA: 'val A',
//         },
//       },
//       {
//         name: 'A2',
//       },
//     ],
//   },
// ];

const myTreeData2 = [
  {
    name: 'App',
    children: [
      {
        name: 'Table',
        children: []
      }
    ]
  }
]

let treeGraphData = myTreeData2;
let tempData;

interface Props {};
interface State {
  data: object;
}

  class TreeGraph extends React.Component <Props, State> {

    state: State = {
      data : treeGraphData
    };

    componentDidMount() {
      setTimeout(() => {
        console.log('TreeGraph mounted');
        // open connection with background script
        const port = chrome.runtime.connect();
        port.onMessage.addListener(message => {
          treeGraphData = [message.payload.payload];
          console.log('TreeGraph componentDidMount: ', treeGraphData);
          this.setState({
            data: treeGraphData
          });
        })
      }, 2000);
    }

    componentDidUpdate() {
      setInterval(() => {
        // open connection with background script
        const port = chrome.runtime.connect();
        port.onMessage.addListener(message => {
          tempData = [message.payload.payload];
          if (JSON.stringify(tempData) !== JSON.stringify(treeGraphData)) {
            treeGraphData = tempData;
            console.log('TreeGraph componentDidUpdate: ', treeGraphData);
            this.setState({
              data: treeGraphData
            });
          }
        })
      }, 500);
    }

    render() {

      return (
        // <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
        <div id='treeGraph' style={{'height': '500px'}}>

        <Tree data={this.state.data} orientation="vertical" translate={{ x: 100, y: 20}}/>
  
        </div>
      );
    }
  }

export default TreeGraph;