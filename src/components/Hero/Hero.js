import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import style from "./Hero.module.scss";

import { Avatar } from "./Avatar/Avatar";
import { HeroData } from "./HeroData/HeroData";

export const Hero = ({ id, description, name, avatar }) => {
  return (
    <Row className={style.hero}>
      <Col lg={2}>
        <Avatar url={avatar} />
      </Col>
      <Col lg={7}>
        <HeroData name={name} description={description} />
      </Col>
      <Col lg={1.5} className="offset-2">
        <Link to={`/hero/${id}`} className={style.showInfo}>
          Show Info
        </Link>
      </Col>
    </Row>
  );
};
