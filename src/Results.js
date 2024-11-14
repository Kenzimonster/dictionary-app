import React from "react";
import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props){
  if  (props.results){
    return (
      <div className="results">
        <h2 className="text-capitalize">{props.results.word}</h2>
        <p>/ {props.results.phonetic} /</p>
        {props.results.meanings.map(function (meaning, index){
          return <div key={index}>
             <Meanings  meaning={meaning} />
          </div>
        })}
      </div>
    )
  } else {
    return( 
      <div className="error-message">
        <h2>! ERROR !</h2>
        <p>The Inquisition has no record of your requested word "{props.word}".</p>
      </div>
    )
  }
}