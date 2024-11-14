import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(){
  let [keyword, setKeyword] = useState(" ");

  function handleResponse(response){
    console.log(response.data)
  }
  function search(event){
    event.preventDefault();
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
      <form onSubmit={search}>
        <input type ="search" onChange = {handleKeywordChange}/>
        <input type ="submit" />
      </form>
    </div>
  )
}