import * as React from "react";
import Timeline from "react-visjs-timeline";

const options = {
  width: "100%",
  height: "250px",
  stack: true,
  showCurrentTime: false,
  showMajorLabels: false,
  zoomable: true,
  start: new Number(305),
  end: new Number(320),
  min: new Number(0),
  max: new Number(1000),
  type: "range",
  selectable: true,
  // horizontalScroll : true,
  verticalScroll: true,
  // editable: true,
};
const items2 = [
  {
    start: new Number(2),
    end: new Number(5), // end is optional
    content: "test1",
  },
  {
    start: new Number(1),
    end: new Number(2), // end is optional
    content: "test2",
  },
  {start: new Number(3),
    end: new Number(4), // end is optional
    content: "test3"
  },
  {start: new Number(5),
   end: new Number(9),
   content: 'newtest'
  }
];

interface event {
  title: string,
  content: string,
  start: any,
  end: any,
}

let items = [];
let event;
let tempData;

function getData(Node) {
  event = {};
  event.start = new Number (Math.floor(Node.attributes.renderStart));
  event.end = new Number (Math.floor(Node.attributes.renderStart + Node.attributes.renderTotal));
  event.content = Node.name;
  event.title = Node.name;
  items.push(event);
  if (Node.children.length !== 0) {
    Node.children.forEach(child => {
      getData(child);
    })
  }
}


interface Props {};
interface State {
  data: object[],
  render: boolean
}

class LineGraph extends React.Component <Props, State>{

  state: State = {
    data : items, 
    render : false
  };

  componentDidMount() {
    console.log('Timeline mounted');
    // open connection with background script
    const port = chrome.runtime.connect();
    // listen for a message from the background script
    port.onMessage.addListener(message => {
      console.log('This is message from Timeline componentDidMount - port message: ', message);
      // console.log('Data before settings state: ', this.state.data);
      // getData(message.payload.payload.children[0]);
      // console.log('Timeline information: ', items);
      
      setTimeout(() => { 
        console.log('BEFORE: ', this.state.data);
        getData(message.payload.payload.children[0]);
        this.setState({ 
          data: items,
          render: true
        });
        console.log('AFTER: ', this.state.data);
      }, 200)

      // console.log('Data after setting state: ', this.state.data);

    })
    port.onDisconnect.addListener(() => {
      console.log('disconnected');
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
        <div id='lineGraph' style={{}}>
          {this.state.render && 
            <Timeline
              options={options}
              items={this.state.data}
            />}
        </div>
      );
    }
  }

export default LineGraph;