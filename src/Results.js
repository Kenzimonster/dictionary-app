import React from "react";
import Meanings from "./Meanings";
import "./Results.css";
import Phonetics from "./Phonetics";

export default function Results(props){
  console.log(props.results);
  if  (props.results=== null){
    return (
      <div className="col-12">
       <div className="welcome">
         <h2>Welcome to the Inquisitions Dictionary</h2>
         <p>Please enter the word you wish to search in the word search form above</p>
        </div>
      </div>
    )
  }else {
   if(props.results.status === 'not_found') {
      return( 
        <div className="col-12">
         <div className="error-message">
           <h2>! ERROR !</h2>
           <p>The Inquisition has no record of your requested word "{props.word}"</p>
          </div>
        </div>
      )
   } else {
     return (
        <div className=" col-12 col-md-8 col-lg-6">
            <div className="results">
             <h2 className="text-capitalize">{props.results.word}</h2>
              <p className="phonetics"><em>/<Phonetics phonetic={props.results.phonetic}/> /</em></p>
              {props.results.meanings.map(function (meaning, index){
                return <div key={index}>
                  <Meanings  meaning={meaning} />
               </div>
             })}
            </div>
          </div>
     )
   }
  }
}