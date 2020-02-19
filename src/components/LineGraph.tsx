import * as React from "react";
import Timeline from "react-visjs-timeline";

const options = {
  width: "100%",
  height: "50px",
  stack: false,
  showMajorLabels: false,
  showCurrentTime: false,
  zoomMin: 1000 * 5 * 60,
  zoomMax: 1000 * 5 * 60,
  zoomable: false,
  start: new Date("October 14, 2018 10:56:00"),
  end: new Date("October 14, 2018 11:00:00"),
  min: new Date("October 14, 2018 10:56:00"),
  max: new Date("October 14, 2018 11:00:00"),
  type: "background",
  selectable: true
};

const items = [
  {
    start: new Date("October 14, 2018 10:57:00"),
    end: new Date("October 14, 2018 10:57:20"), // end is optional
    content: ""
  },
  {
    start: new Date("October 14, 2018 10:58:10"),
    end: new Date("October 14, 2018 10:58:20"), // end is optional
    content: ""
  }
];

const customTimes = {
  marker: new Date("October 14, 2018 10:56:30")
};

class LineGraph extends React.Component {
    render() {
      return (
        <div id='lineGraph' style={{}}>

        <h1> Line Test Test</h1>
        <Timeline
    options={options}
    items={items}
    customTimes={customTimes}
      />,
        </div>
      );
    }
  }

export default LineGraph;