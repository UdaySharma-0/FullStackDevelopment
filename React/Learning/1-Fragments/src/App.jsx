import React, { useState } from "react";
import "./App.css";
import Food from "./components/Food";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

const App = () => {
  let [fooditems, setfooditems] = useState([]);// Always returns an array have two variable one is value and second is method to change value
 
  let onKeyDown = (e) => {
    if (e.key === 'Enter') {
      let newFoodItem = e.target.value;
      console.log(newFoodItem);
      e.target.value = '';
      let newItems = [...fooditems, newFoodItem];
      setfooditems(newItems);
    }

    let onClickBuy = (e)=>{
      console.log('clicked');
      
    }
  
    
  };

  return (
    // Fragment
    <>
      <Container>
        {/* In Fragments */}
        {/* Short hand <>  code ..</>*/}
        {/* It helps to avoid extra divs means clean DOM and allow grouping of multiple elements */}

        <h1 className="text-2xl font-semibold p-4 food-heading text-center">
          Healthy Food
        </h1>

        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMessage items={fooditems} />
        <Food items={fooditems} />
      </Container>

      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container>
    </>
  );
};

export default App;
