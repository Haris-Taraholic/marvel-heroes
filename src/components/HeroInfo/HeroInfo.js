import React, { Component } from "react";

import style from "./HeroInfo.module.scss";

import { Row, Col } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { Switch, Tooltip } from "@material-ui/core";

import { fetchHeroById } from "../../services/heroService";
import { ListofComics } from "./Comics/ListofComics";

class HeroInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: null,
      toggleActive: false,
      checkedA: false,
      checkedB: false,
    };
  }
  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    fetchHeroById(id).then((data) =>
      this.setState({ hero: data.data.data.results[0] })
    );
  }
  render() {
    return this.state.hero !== null ? (
      <Row>
        <Col lg={9} className="offset-3 mt-5">
          <img
            src={`${this.state.hero.thumbnail.path}.${this.state.hero.thumbnail.extension}`}
            alt="Sorry nothing found"
            className={style.heroImage}
          />
        </Col>
        <Col
          lg={12}
          className={`${style.heroName} d-flex justify-content-center mt-4`}
        >
          <p>{this.state.hero.name}</p>
        </Col>
        <Col lg={12}>
          {this.state.hero.description !== "" ? (
            <h2
              className={`${style.heroDesc} d-flex justify-content-center text-white w-50`}
            >
              {this.state.hero.description}
            </h2>
          ) : (
            <h1 className="d-flex justify-content-center text-white">
              This Hero does not have description...
            </h1>
          )}
        </Col>
        <Col lg={12}>
          <Tooltip title="Toggle Comics">
            <Switch
              checked={this.state.checkedB}
              onChange={this.handleChange}
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </Tooltip>
        </Col>
        {this.state.checkedB ? <ListofComics id={this.state.hero.id} /> : null}
      </Row>
    ) : (
      <Row className="d-flex justify-content-center mt-4 pb-5">
        <Loader type="Puff" color="#00BFFF" height={500} width={500} />
      </Row>
    );
  }
}

export { HeroInfo };
