import React from "react";
import "./Meanings.css";

export default function Meanings(props){
  return (
  <div className="meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
    <p>{props.meaning.definition}</p>
    <p><em>"{props.meaning.example}"</em></p>
  </div>)
}