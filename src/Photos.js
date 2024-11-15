import React from "react";
import "./Photos.css";

export default function Photos(props){
  if(props.photos){
    return(
      <div className="col-12 col-md-4 col-lg-6 mt-5">
       <div className="row photos">
          {props.photos.map(function(photo, index){
            return (
              <div className="col-6 col-md-12 col-lg-6 mb-3" key={index}>
                <div className=" photoContainer">
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img src={photo.src.landscape}  className="img-fluid" alt={photo.alt} />
                  </a>
                </div>
             </div>
            )
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}