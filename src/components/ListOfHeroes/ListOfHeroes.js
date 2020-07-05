import React, { Component } from "react";

// import style from "./ListOfHeroes.module.scss";

import { fetchAll } from "../../services/heroService";

import { Hero } from "../Hero/Hero";

class ListOfHeroes extends Component {
  constructor(props) {
    super(props);
    this.state = { heroes: null };
  }
  componentDidMount() {
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
    ) : null;
  }
}

export { ListOfHeroes };
