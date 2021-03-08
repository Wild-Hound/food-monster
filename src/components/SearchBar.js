import React,  { useEffect } from 'react'
import "./SearchBar.css"

function SearchBar({func}) {
    useEffect(() => {
        document.getElementById("searchTag").addEventListener("keyup", (e) =>{
        if(e.key === "Enter"){
            func()
        }
    })
    },[])
    

    return (
        <div className="searchArea">
            <input id="searchTag" placeholder="Type Here"/>
            <button onClick={ () => func()} className="searchBtn">Search</button>
        </div>
    )
}

export default SearchBar
