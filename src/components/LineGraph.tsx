import * as React from 'react';
import Timeline from 'react-visjs-timeline';

const options = {
  width: '100%',
  height: '250px',
  stack: true,
  showCurrentTime: false,
  showMajorLabels: false,
  zoomable: true,
  start: new Number(305),
  end: new Number(320),
  min: new Number(0),
  max: new Number(1000),
  type: 'range',
  selectable: true,
  // horizontalScroll : true,
  verticalScroll: true,
  // editable: true,
};

interface event {
  title: string,
  content: string,
  start: any,
  end: any,
}

const items = [];
let event;
let tempData;

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
interface State {
  data: object[],
  render: boolean
}

class LineGraph extends React.Component <{}, State> {
  state: State = {
    data: items,
    render: false,
  };

  componentDidMount() {
    // open connection with background script
    const port = chrome.runtime.connect();
    // listen for a message from the background script
    port.onMessage.addListener((message) => {
      setTimeout(() => {
        getData(message.payload.payload.children[0]);
        this.setState({
          data: items,
          render: true,
        });
      }, 200);
      // abort connection
      port.disconnect();
    });
  }

  // componentDidUpdate() {
  //   setTimeout(() => {
  //     // open connection with background script
  //     // const port = chrome.runtime.connect();
  //     // port.onMessage.addListener(message => {
  //     //   items = [];
  //     //   tempData = getData(message.payload.payload.children[0]);
  //     //   if (JSON.stringify(tempData) !== JSON.stringify(items)) {
  //     //     items = tempData;
  //     //     console.log('Timeline componentDidUpdate: ', items);
  //         console.log('Updated state to: ', this.state.data);
  //         this.setState({
  //           render: false
  //         });
  //         this.setState({
  //           data: items,
  //           render: true
  //         });
  //   //     }
  //   //   })
  //   }, 20000);
  // }

  render() {
    return (
      <div id="lineGraph" style={{}}>
        {this.state.render
            && (
            <Timeline
              options={options}
              items={this.state.data}
            />
            )}
      </div>
    );
  }
}

export default LineGraph;
