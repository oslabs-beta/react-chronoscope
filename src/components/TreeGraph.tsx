/* eslint-disable */
import * as React from "react";
import { useState } from 'react';
import Tree from 'react-d3-tree';
import { ITreeProps, IShape } from '../interfaces';

interface IStateAndProps {
  name?: any;
  state?: any;
  props?: any;
  renderTotal?: any;
}

const TreeGraph: React.SFC<ITreeProps> = ({ data }) => {
  const [stateAndProps, setStateAndProps] = useState<IStateAndProps>({});
  const [shape, setShape] = useState<IShape | null>(null);
  const [name, setName] = useState<string>('');

  const handleHover = (e) => {
    const { stats, nodeSvgShape, name } = e;
    setStateAndProps(stats);
    setShape(nodeSvgShape);
    setName(name);
  }

  const handleUnHover = () => {
    setStateAndProps({});
    setShape(null);
    setName('');
  }

  return (
    <div id='treeGraph' style={{'height': '535px'}}>
      <div style={{height: '35px'}}>
        {
          shape &&
          shape.shapeProps.fill === 'red' &&
          <h4 style={{ color: 'red' }}>Optimize Performance: Use shouldComponentUpdate, or React.PureComponent, or React.memo</h4>
        }
        <h4>Component: {name}</h4>
        <h5>State: {stateAndProps.state}</h5>
        <h5>Props: {stateAndProps.props}</h5>
        <h5>Render Time: {stateAndProps.renderTotal}</h5>
      </div>
      <div style={{'height': '500px'}}>
      <Tree 
        data={data} 
        orientation="vertical" 
        translate={{ x: 300, y: 20}} 
        zoom={0.45} 
        separation={{ siblings: .6, nonSiblings: .6 }}
        onMouseOver={handleHover}
        onMouseOut={handleUnHover}
      />
      </div>
    </div>
  );
}

export default TreeGraph;
