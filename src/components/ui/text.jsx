import React from "react";

function Text({children, bold, size}) {
  return (
    <span
      className={`text-[#fc907e] bg-gradient-to-br  from-[#fc907e] to-[#9f6eed] bg-clip-text text-transparent ${
        bold ? "font-bold" : "font-normal"
      }  text-[${size}px]`}
    >
      {children}
    </span>
  );
}

export default Text;
