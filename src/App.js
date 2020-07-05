import React from "react";

import style from "./App.module.scss";

import { Header } from "./components/Header/Header";
import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ListOfHeroes } from "./components/ListOfHeroes/ListOfHeroes";

function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Container>
        <Route exact path="/" component={ListOfHeroes} />
      </Container>
    </div>
  );
}

export default App;
