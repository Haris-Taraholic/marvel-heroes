import React from "react";
import style from "./Avatar.module.scss";

export const Avatar = ({ url }) => (
  <img
    className={`${style.image} rounded img-thumbnail`}
    src={url}
    alt="Nothing Found :("
  />
);
