import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import BattleSisterClear from "./BattleSisterClear.png";
import Results from "./Results";

export default function Dictionary(){
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);

  function handleResponse(response){
    console.log(response.data);
    setResults(response.data);
  }
  function search(event){
    event.preventDefault();
    //using SheCodes Dictionary API
    //documentation https://www.shecodes.io/learn/apis/dictionary
    let apiKey =`3at0foeb77eba84a5c21cf21f38b13e9`
    let query = keyword;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${query}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
                <input type ="search" onChange = {handleKeywordChange}/>
                <input type ="submit" />
              </form>
            </div>
          </div>
        </div>
      </header>
      <Results results={results}/>
    </div>
  )
}