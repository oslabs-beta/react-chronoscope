import * as React from "react";
import TreeGraph from "./TreeGraph";
import LineGraph from "./LineGraph"
// import { Hello } from './Hello.jsx';



export interface HelloProps { compiler: string; framework: string; };

export const App = (props: HelloProps) => {
  return (
    <div>
      {/* <Hello /> */}
      <h1>Hello from {props.compiler} and {props.framework}!</h1>
      <div id='treeGraphDiv'>
        <TreeGraph/>
      </div>
      <div id='lineGraphDiv'>
        <LineGraph/>
      </div>
      <h2 style={{width: '10px'}}>Test Test</h2>
    </div>
    )
}

