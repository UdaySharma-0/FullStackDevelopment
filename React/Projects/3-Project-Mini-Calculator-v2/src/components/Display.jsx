import React from "react";

const Display = ({ displayValue }) => {
  return (
    <div>
      <input
        className="border rounded-xs h-10 font-sans w-[92%] mb-4 text-right font-semibold text-lg p-2"
        id="display"
        type="text"
        value={displayValue}
        readOnly
      />
    </div>
  );
};

export default Display;
