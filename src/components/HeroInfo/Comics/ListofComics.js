import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Loader from "react-loader-spinner";

import { fetchAll } from "../../../services/comicService";
import { Comic } from "./Comic/Comic";

export class ListofComics extends Component {
  constructor(props) {
    super(props);
    this.state = { comics: null };
  }
  componentDidMount() {
    let id = this.props.id;
    fetchAll(id).then((data) =>
      this.setState({ comics: data.data.data.results })
    );
  }

  render() {
    return this.state.comics !== null ? (
      <Row>
        {this.state.comics.map((comic, i) => (
          <Comic
            key={i}
            image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            name={comic.title}
          />
        ))}
      </Row>
    ) : (
      <Row className="d-flex justify-content-center mt-4 pb-5">
        <Loader type="Puff" color="#00BFFF" height={200} width={200} />
      </Row>
    );
  }
}
