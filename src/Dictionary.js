import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import BattleSisterClear from "./BattleSisterClear.png";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(){
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);
  let [ photos, setPhotos ] = useState(null);

  function handleResponse(response){
    setResults(response.data);
  }
  function handlePexelsResponse(response){
    setPhotos(response.data.photos);
  }
  function search(event){
    event.preventDefault();
    //using SheCodes Dictionary API
    //documentation https://www.shecodes.io/learn/apis/dictionary
    let apiKey =`3at0foeb77eba84a5c21cf21f38b13e9`
    let query = keyword;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${query}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    //using SheCodes Images API
    //documentation https://www.shecodes.io/learn/apis/images
    let photoKey = `3at0foeb77eba84a5c21cf21f38b13e9`;
    let photoUrl =`https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoKey}`;
    axios.get(photoUrl).then(handlePexelsResponse);
  }
  function handleKeywordChange(event){
    setKeyword(event.target.value);
  }

  return (
    <div>
      <header className="App-header">
        <div className="row">
          <div className="col-4">
            <img src={BattleSisterClear} className="App-logo img-fluid" alt="Sister of Battle reading a book" />
          </div>
          <div className="col-8">
            <div>
              <h1>Inquisition Approved Dictionary</h1>
            </div>
           <div>
              <form onSubmit={search}>
                <input type ="search" onChange = {handleKeywordChange} autoFocus="on" placeholder="Word Search" className="search" />
                <input type ="submit" value="Search" className="submit"/>
              </form>
            </div>
          </div>
        </div>
      </header>
      <div className="row">
        <div className="col">
          <Results results={results} word={keyword}/>
        </div>
       <div className="col mt-5">
         <Photos photos={photos}/>
        </div>
      </div>
    </div>
  )
}