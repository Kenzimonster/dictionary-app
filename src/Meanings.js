import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meanings(props){
  return (
  <div className="meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
    <p><strong>Definition: </strong>{props.meaning.definition}</p>
    <p><strong>Example: </strong><em>"{props.meaning.example}"</em></p>
    <p><strong>Synonyms: </strong><Synonyms synonyms={props.meaning.synonyms}/></p>
  </div>)
}