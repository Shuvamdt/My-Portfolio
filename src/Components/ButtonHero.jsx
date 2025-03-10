import React from "react";

const ButtonHero = ({ name, isBeam = false, containerClass }) => {
  return (
    <button type="button" className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3" aria-hidden="true">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </button>
  );
};

export default ButtonHero;
