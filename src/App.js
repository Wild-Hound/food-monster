import './App.css';
import SearchBar from './components/SearchBar';
import React,  { useState } from 'react'
import FoodsArea from './components/FoodsArea';

function App() {
  
  const [foods, setFoods] = useState([])

  const findRecipe = async() => {
    let text = document.getElementById("searchTag").value
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
    let results = await fetch(url).then( res => res.json())
    setFoods(results.meals)
    console.log(foods)
  }

  return (
    <div className="App">
      <SearchBar func={findRecipe}></SearchBar>
      <div className="foodArea">
        {foods.map((food) =>{
          return <FoodsArea value = {food} key={food.idMeal}></FoodsArea>
        })}
      </div>
    </div>
  );
}

export default App;
