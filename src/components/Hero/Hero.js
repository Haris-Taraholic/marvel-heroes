import React from "react";
import { Row, Col } from "react-bootstrap";

import style from "./Hero.module.scss";

import { Avatar } from "./Avatar/Avatar";

export const Hero = ({ id, description, name, avatar }) => {
  return (
    <Row className={style.hero}>
      <Avatar url={avatar} />
    </Row>
  );
};
