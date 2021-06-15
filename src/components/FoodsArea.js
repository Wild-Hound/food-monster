import React from "react";
import "./FoodArea.css";
import { Link } from "react-router-dom";

function FoodsArea(props) {
  const { strMeal, strCategory, strArea, strTags, strMealThumb, idMeal } =
    props.value;

  return (
    <div className="food-card">
      <img src={strMealThumb} className="foodImg"></img>
      <div className="foodCOntent">
        <h2 className="foodName">{strMeal}</h2>
        <div className="meta">
          <h3>Type: {strArea}</h3>
          <h3>Course: {strCategory}</h3>
        </div>
        <h3 className="foodTags">Tags: {strTags}</h3>
      </div>
      <button className="foodButton">
        <Link to={`/${idMeal}`}>View Recipie</Link>
      </button>
    </div>
  );
}

export default FoodsArea;
