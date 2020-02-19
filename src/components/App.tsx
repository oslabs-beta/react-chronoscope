import * as React from "react";
import  TreeGraph from "./TreeGraph";
import LineGraph from "./LineGraph"



export interface HelloProps { compiler: string; framework: string; };

export const App = (props: HelloProps) => {
  return (
    <div>
    <h1>Hello from {props.compiler} and {props.framework}!</h1>
    <div id='treeGraphDiv' style={{'margin-left': '0.5em', 'height': '500px', 'background-color': 'white',}}>
     <TreeGraph/>
    </div>
    <div id='lineGraphDiv' style={{'margin-left': '0.5em', 'background-color': 'blue'}}>
     <LineGraph/>
    </div>
    <h2 style={{width: '10px'}}>Test Test</h2>
    </div>
    )
}

