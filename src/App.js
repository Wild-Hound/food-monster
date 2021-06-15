import "./App.css";
import SearchBar from "./components/SearchBar";
import React, { useState } from "react";
import FoodsArea from "./components/FoodsArea";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FoodInfo from "./components/FoodInfo/FoodInfo";

function App() {
  const [foods, setFoods] = useState([]);

  const findRecipe = async () => {
    let text = document.getElementById("searchTag").value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`;
    let results = await fetch(url).then((res) => res.json());
    setFoods(results.meals);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SearchBar func={findRecipe}></SearchBar>
            <div className="foodArea">
              {foods.map((food) => {
                return <FoodsArea value={food} key={food.idMeal}></FoodsArea>;
              })}
            </div>
          </Route>
          <Route path="/:id">
            <FoodInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
