import React from "react";

const Button = ({ btnlabel, handleCalVal }) => {
  
  return (
    <button className="w-11 h-11 m-1 text-xl font-semibold rounded shadow bg-gray-200 hover:bg-gray-300 text-black" onClick={()=>handleCalVal(btnlabel)}>
      {btnlabel}
    </button>
  );
};

export default Button;
