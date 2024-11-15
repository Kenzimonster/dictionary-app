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
    setPhotos(null);
    if (response.data.status === "not_found"){
   return null;
    }else{
    photoSearch(response.data.word);
    }
  }
 function handlePexelsResponse(response){
    setPhotos(response.data.photos);
  }
  function photoSearch(query){
    //using SheCodes Images API
    //documentation https://www.shecodes.io/learn/apis/images
    let apiKey =`3at0foeb77eba84a5c21cf21f38b13e9`;
    let photoUrl =`https://api.shecodes.io/images/v1/search?query=${query}&key=${apiKey}`;
    axios.get(photoUrl).then(handlePexelsResponse);
  }
  function search(event){
    event.preventDefault();
    //using SheCodes Dictionary API
    //documentation https://www.shecodes.io/learn/apis/dictionary
    let apiKey =`3at0foeb77eba84a5c21cf21f38b13e9`;
    let query = keyword;
    let dictionaryApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${query}&key=${apiKey}`;
    axios.get(dictionaryApiUrl).then(handleResponse);   
  }
  function handleKeywordChange(event){
    setKeyword(event.target.value);
  }

  return (
    <div>
      <header className="App-header">
        <div className="row">
          <div className=" col-12 col-lg-4">
            <img src={BattleSisterClear} className="App-logo img-fluid" alt="Sister of Battle reading a book" />
          </div>
          <div className="col-12 col-lg-8">
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
       <Results results={results} word={keyword} />
       <Photos photos={photos} />
     </div>
    </div>
  )
}