import * as React from 'react';
import Timeline from 'react-visjs-timeline';
import { ITimelineProps } from '../interfaces';

// interface State {
//   data: object[],
//   render: boolean
// }


const LineGraph: React.SFC<ITimelineProps> = ({ data, options }) => (
  <Timeline
    options={options}
    items={data}
  />
);

export default LineGraph;

// class LineGraph extends React.Component <{}, State> {
//   state: State = {
//     data: items,
//     render: false,
//   };

//   componentDidMount() {
//     // open connection with background script
//     const port = chrome.runtime.connect();
//     // listen for a message from the background script
//     port.onMessage.addListener((message) => {
//       setTimeout(() => {
//         getData(message.payload.payload.children[0]);
//         this.setState({
//           data: items,
//           render: true,
//         });
//       }, 200);
//       // abort connection
//       port.disconnect();
//     });
//   }

//   render() {
//     return (
//       <div id="lineGraph" style={{}}>
//         {this.state.render
//             && (
//             <Timeline
//               options={options}
//               items={this.state.data}
//             />
//             )}
//       </div>
//     );
//   }
// }

// export default LineGraph;
