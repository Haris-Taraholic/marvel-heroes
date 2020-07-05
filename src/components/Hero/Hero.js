import React from "react";
import { Row, Col } from "react-bootstrap";

import style from "./Hero.module.scss";

import { Avatar } from "./Avatar/Avatar";
import { HeroData } from "./HeroData/HeroData";

export const Hero = ({ id, description, name, avatar }) => {
  return (
    <Row className={style.hero}>
      <Col lg={3}>
        <Avatar url={avatar} />
      </Col>
      <Col lg={7}>
        <HeroData name={name} description={description} />
      </Col>
    </Row>
  );
};
