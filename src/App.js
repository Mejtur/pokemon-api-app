import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import PokemonList from "./components/PokemonList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokemonInfo from "./components/PokemonInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={PokemonList} />
          <Route path="/pokemon/:id" component={PokemonInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
