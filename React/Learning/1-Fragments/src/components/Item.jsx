import React from "react";
import styles from "./item.module.css";

const Item = (props) => {
  //Destructuring of an array
  let { foodItem, eventOnBuyButton, bought } = props;
  console.log(bought)

  return (
    <li className={`${styles["kg-coding"]} ${bought && "bg-amber-400"}`}>
      {foodItem}

      <button
        className={`px-3 rounded-sm py-0.5 bg-amber-500 text-amber-900 float-right `}
        //onClick={(event) => eventOnBuyButton(event)}
        onClick={eventOnBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
