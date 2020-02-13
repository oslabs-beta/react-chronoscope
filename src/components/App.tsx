import * as React from "react";
import  Test from "./Test";


export interface HelloProps { compiler: string; framework: string; };

export const App = (props: HelloProps) => {
  return (
    <div>
     <Test/>

    <h1>Hello from {props.compiler} and {props.framework}!</h1>


    </div>
    )
}

