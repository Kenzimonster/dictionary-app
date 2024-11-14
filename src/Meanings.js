import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meanings(props){
  return (
  <div className="meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
    <p><strong>Definition: </strong>{props.meaning.definition}.</p>
    <p><strong>Example: </strong><Example example={props.meaning.example} /></p>
    <div><strong>Synonyms: </strong><Synonyms synonyms={props.meaning.synonyms}/></div>
  </div>)
}