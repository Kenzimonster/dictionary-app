import React from "react";

export default function Phonetics(props){
  if(props.phonetic){
    return `${props.phonetic}`;
  }else{
    return `on phonetics on record`;
  }
}