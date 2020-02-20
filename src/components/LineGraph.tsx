import * as React from "react";
import Timeline from "react-visjs-timeline";

const options = {
  width: "100%",
  height: "250px",
  stack: true,
  showCurrentTime: false,
  showMajorLabels: false,
  zoomable: true,
  start: new Number(0),
  end: new Number(50),
  min: new Number(0),
  max: new Number(70),
  type: "range",
  selectable: true,
  horizontalScroll : true,
  verticalScroll: true,
};
const items = [
  {
    start: new Number(2),
    end: new Number(2.5), // end is optional
    content: ""
  },
  {
    start: new Number(1),
    end: new Number(2), // end is optional
    content: "test2"
  },
  {start: new Number(3),
    end: new Number(4), // end is optional
    content: "test3"
  }
];


class LineGraph extends React.Component {
    render() {
      return (
        <div id='lineGraph' style={{}}>
         <Timeline
    options={options}
    items={items}
  />
        <h1> Line Test Test</h1>
      
        </div>
      );
    }
  }

export default LineGraph;