import React from "react";
import "./Photos.css";

export default function Photos(props){
  if(props.photos){
    return(
     <div className="row photos">
        {props.photos.map(function(photo, index){
          return (<div className="col-6 mb-3" key={index}><div className=" photoContainer"><a href={photo.src.original} target="_blank" rel="noreferrer"><img src={photo.src.landscape}  className="img-fluid" alt={photo.alt} /></a></div></div>)
        })}
      </div>
    );
  } else {
    return null;
  }
}