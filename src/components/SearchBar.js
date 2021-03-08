import React,  { useEffect } from 'react'

function SearchBar({func}) {
    useEffect(() => {
        document.getElementById("searchTag").addEventListener("keyup", (e) =>{
        if(e.key === "Enter"){
            func()
        }
    })
    },[])
    

    return (
        <div>
            <input id="searchTag" />
            <button onClick={ () => func()}>Search</button>
        </div>
    )
}

export default SearchBar
