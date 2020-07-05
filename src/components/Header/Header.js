import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

export const Header = () => {
  return (
    <Row className={style.container}>
      <Col lg="3" className={`${style.title} offset-lg-2`}>
        <h2>Marvel Heroes</h2>
      </Col>
      <Col lg="3" className={`${style.buttonsWrapper} offset-lg-2`}>
        <Link to="/">
          <Button variant="dark">Home</Button>
        </Link>
        <Link to="/">
          <Button variant="dark" className="ml-3">
            My Team
          </Button>
        </Link>
        <Link to="/">
          <Button variant="dark" className="ml-3">
            Comics
          </Button>
        </Link>
      </Col>
    </Row>
  );
};
