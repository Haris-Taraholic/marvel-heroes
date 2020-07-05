import React from "react";
import { Row, Col } from "react-bootstrap";
import style from "./HeroData.module.scss";

export const HeroData = ({ name, description }) => (
  <Row>
    <Col lg={12}>
      <h3>{name}</h3>
    </Col>
    <Col lg={12}>
      <p>
        {description !== ""
          ? description
          : "Sorry, this hero does not have any description..."}
      </p>
    </Col>
  </Row>
);
