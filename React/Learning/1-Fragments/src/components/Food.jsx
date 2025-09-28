import React, { useState } from "react";
import Item from "./Item";

const Food = (props) => {
  const { items } = props;
  let [ activeItem, setActiveItem ] = useState([]);

  let handlerBuyColor = (event, item)=>{
    let newItems = [...activeItem, item];
    setActiveItem(newItems);
  }

  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItem.includes(item)}
          eventOnBuyButton={(event)=>handlerBuyColor(event, item)}
        />
      ))}
    </ul>
  );
};

export default Food;
