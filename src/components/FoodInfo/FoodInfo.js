import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FoodInfo.css";

function FoodInfo() {
  const { id } = useParams();
  const [foodInfo, setFoodInfo] = useState({});
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoodInfo(data.meals[0]));
  }, []);

  function dataJSX() {
    let temp = [];
    for (let x = 1; x <= 20; x++) {
      if (foodInfo[`strIngredient${x}`]) {
        temp.push(
          <p className="ingredientList">
            {foodInfo[`strIngredient${x}`]}: {foodInfo[`strMeasure${x}`]},
          </p>
        );
      }
    }
    let element = temp.map((val) => val);
    return element;
  }

  return (
    <div className="FIwrapper">
      <div className="FImeta">
        <img src={foodInfo.strMealThumb} />
        <h2>{foodInfo.strMeal}</h2>
        <h3>Origin: {foodInfo.strArea}</h3>
        <h3>Course: {foodInfo.strCategory}</h3>
        <h3>Tags: {foodInfo.strTags}</h3>
      </div>
      <div className="FIinstructions">
        <h2>Instructions</h2>
        <p>{foodInfo.strInstructions}</p>
      </div>
      <div className="FIingredients">
        <h2>Ingredients</h2>
        <div className="ingredientsWrapper">{dataJSX()}</div>
      </div>
    </div>
  );
}

export default FoodInfo;
