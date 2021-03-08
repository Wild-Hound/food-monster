import React from 'react'
import "./FoodArea.css"

function FoodsArea(props) {
    const {strMeal,strCategory,strInstructions,strArea,strTags,strMealThumb} = props.value
    console.log(props.value)
    console.log(strMeal)
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
            <button className="foodButton">View Recipie</button>
        </div>
    )
}

export default FoodsArea
