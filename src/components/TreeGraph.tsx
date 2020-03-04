/* eslint-disable */
import * as React from "react";
import { useState } from 'react';
import Tree from 'react-d3-tree';
import { ITreeProps } from '../interfaces';

interface IStateAndProps {
  state?: any;
  props?: any;
  renderTotal?: any;
}

const TreeGraph: React.SFC<ITreeProps> = ({ data }) => {
  const [stateAndProps, setStateAndProps] = useState<IStateAndProps>({});

  const handleHover = (e) => {
    const { stats } = e;
    setStateAndProps(stats);
  }

  return (
    <div id='treeGraph' style={{'height': '500px'}}>
      <div style={{ border: '2px solid black' }}>
        <h3>State: {stateAndProps.state}</h3>
        <h3>Props: {stateAndProps.props}</h3>
        <h3>Render Time: {stateAndProps.renderTotal}</h3>
      </div>
      <Tree 
        data={data} 
        orientation="vertical" 
        translate={{ x: 300, y: 20}} 
        zoom={0.45} 
        separation={{ siblings: .6, nonSiblings: .6 }}
        onMouseOver={handleHover}
      />
    </div>
  );
}

export default TreeGraph;
