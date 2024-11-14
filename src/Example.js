import React from "react";

export default function Example(props){
  if (props.example) {
   return(
      <span><em>"{props.example}."</em></span>
    );
  } else {
    return (<span> No example on record.</span>);
  }
}