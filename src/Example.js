import React from "react";

export default function Example(props){
  if (props.example) {
   return(
      <span className="example"><em>"{props.example}."</em></span>
    );
  } else {
    return (<span className="error"> No example on record.</span>);
  }
}