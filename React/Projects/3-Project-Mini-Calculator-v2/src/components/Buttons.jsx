import React from "react";
import Button from "./Button";

const Buttons = ({ handleCalVal }) => {
  const buttonName = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    ".",
    "=",
    "/",
  ];

  return (
    <div className="btn-containers flex-wrap">
      {buttonName.map((item) => (
        <Button key={item} btnlabel={item} handleCalVal={handleCalVal} />
      ))}
    </div>
  );
};

export default Buttons;
