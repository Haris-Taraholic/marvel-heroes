import React from "react";

import style from "./App.module.scss";

import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Header } from "./components/Header/Header";
import { ListOfHeroes } from "./components/ListOfHeroes/ListOfHeroes";
import { HeroInfo } from "./components/HeroInfo/HeroInfo";

function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Container>
        <Route exact path="/" component={ListOfHeroes} />
        <Route exact path="/hero/:id" component={HeroInfo} />
      </Container>
    </div>
  );
}

export default App;
