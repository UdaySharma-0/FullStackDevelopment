import React from "react";
import { MdAssignmentAdd  } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

const Button = ({ color, handlebtn }) => {
  // console.log(color)
  return (
    <button
      className={`font-semibold text-2xl flex justify-center items-center text-white rounded-sm w-20 py-1 min-w-20 ${
        color === "red"
          ? "bg-red-500 hover:bg-red-700"
          : "bg-green-500 hover:bg-green-700"
      }`}
      
      onClick={handlebtn}
    >
      {color === "red" ? <TiDeleteOutline /> : <MdAssignmentAdd  />}
    </button>
  );
};

export default Button;
