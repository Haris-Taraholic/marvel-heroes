import React, { Component } from "react";

import { fetchAll } from "../../services/heroService";
import Loader from "react-loader-spinner";
import { Row } from "react-bootstrap";

import { Hero } from "../Hero/Hero";

class ListOfHeroes extends Component {
  constructor(props) {
    super(props);
    this.state = { heroes: null, isLoading: true };
  }
  componentDidMount() {
    if (this.state.heroes === null) {
      this.setState({ isLoading: false });
    } else {
      this.setState({ isLoading: true });
    }
    fetchAll().then((heroesData) =>
      this.setState({ heroes: heroesData.data.data.results })
    );
  }
  render() {
    return this.state.heroes !== null ? (
      <div>
        {this.state.heroes.map((heroData, i) => (
          <Hero
            key={i}
            id={heroData.id}
            description={heroData.description}
            name={heroData.name}
            avatar={`${heroData.thumbnail.path}.${heroData.thumbnail.extension}`}
          />
        ))}
      </div>
    ) : (
      <Row className="d-flex justify-content-center mt-4 pb-5">
        <Loader type="Puff" color="#00BFFF" height={500} width={500} />
      </Row>
    );
  }
}

export { ListOfHeroes };
