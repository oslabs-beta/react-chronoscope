/* eslint-disable */
import * as React from "react";
import Tree from 'react-d3-tree';
import { ITreeProps } from '../interfaces';

const TreeGraph: React.SFC<ITreeProps> = ({ data }) => {
  return (
    <div id='treeGraph' style={{'height': '500px'}}>
      <Tree 
        data={data} 
        orientation="vertical" 
        translate={{ x: 300, y: 20}} 
        zoom={0.45} 
        separation={{ siblings: .6, nonSiblings: .6 }}
      />
    </div>
  );
}

export default TreeGraph;
