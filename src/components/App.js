"use strict";
exports.__esModule = true;
var React = require("react");
var TreeGraph_1 = require("./TreeGraph");
var LineGraph_1 = require("./LineGraph");
// export interface HelloProps { compiler: string; framework: string; };
exports.App = function ( /*props: HelloProps*/) {
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
    
      <h1 style={{ textAlign: "center", fontSize: "28px" }}>React ChronoScope</h1>
      <hr style={{ border: "2px solid black" }}></hr>
      <h2>Tree Diagram</h2>
      <div id='treeGraphDiv' style={{ backgroundColor: "whitesmoke" }}>
        <TreeGraph_1["default"] />
      </div>
      <hr style={{ border: "2px solid black" }}></hr>
      <div id='lineGraphDiv'>
        <h2>TimeLine</h2>
        <LineGraph_1["default"] />
      </div>
    </div>);
};
