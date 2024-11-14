import React from "react";

export default function SignSelection({ signs, onSelectSign }) {
  return (
    <div className="sign-wrapper">
      {signs.map((sign) => (
        <div className="sign-container" key={sign}>
          <img
            src={`/images/${sign}.png`}
            alt={`${sign} icon`}
            className="sign-img"
          />
          <button className="sign-name" onClick={() => onSelectSign(sign)}>
            {sign}
          </button>
        </div>
      ))}
    </div>
  );
}
