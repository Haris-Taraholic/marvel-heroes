import React from "react";

import style from "./Comic.module.scss";

export const Comic = ({ image, name }) => {
  return (
    <div className={`${style.wrapper} col-lg-3 offset-1 mb-3 hoverable`}>
      <div class="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator w-100" src={image} />
        </div>
        <div class="card-content">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};
