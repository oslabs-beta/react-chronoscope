import * as React from 'react';
import Timeline from 'react-visjs-timeline';
import { ITimelineProps } from '../interfaces';

const LineGraph: React.SFC<ITimelineProps> = ({ data, options }) => (
  <Timeline
    options={options}
    items={data}
  />
);

export default LineGraph;
