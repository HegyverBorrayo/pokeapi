import { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom'
import PokemonThumnail from "./components/PokemonThumnail";
import { Detail } from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <div className='app-container'>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/detail/:pokemonId' component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
