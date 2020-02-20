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
    {id: 1, content: 'item 1', start: "October 14, 2018 10:56:00", end: "October 14, 2018 10:56:10"},
    {id: 2, content: 'item 2', start: "October 14, 2018 10:56:00", end: "October 14, 2018 10:56:20"},
    // {id: 3, content: 'item 3', start: '2013-04-18'},
    // {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
    // {id: 5, content: 'item 5', start: '2013-04-25'},
    // {id: 6, content: 'item 6', start: '2013-04-27'}
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