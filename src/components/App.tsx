import * as React from "react";
import TreeGraph from "./TreeGraph";
import LineGraph from "./LineGraph"

export interface HelloProps { compiler: string; framework: string; };

export const App = (props: HelloProps) => {
  return (
    // <div>
    //   {/* <Hello /> */}
    //   <h1>Hello from {props.compiler} and {props.framework}!</h1>
    //   <div id='treeGraphDiv'>
    //     <TreeGraph/>
    //   </div>
    //   <div id='lineGraphDiv'>
    //     <LineGraph/>
    //   </div>
    //   <h2 style={{width: '10px'}}>Test Test</h2>
    // </div>
    <div>
    {/* <img src="ChronoScope.png"></img> */}
      <h1 style={{textAlign : "center", fontSize: "28px"}}>React ChronoScope</h1>
      <hr style={{border: "2px solid black"}}></hr>
      <h2>Tree Diagram</h2>
      <div id='treeGraphDiv' style={{backgroundColor:"whitesmoke"}}>
        <TreeGraph/>
      </div>
      <hr style={{border: "2px solid black"}}></hr>
      <div id='lineGraphDiv'>
        <h2>TimeLine</h2>
        <LineGraph/>
      </div>
    </div>
    )
}

