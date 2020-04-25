// Importantando o React
import React from "react";
// Importantando o component Home
import HomeScreen from "./screens/home";
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'

import DiscoveryScreen from "./screens/discovery";
import SearchScreen from "./screens/search";
import AlbumScreen from "./screens/album";
import FavoritesScreen from "./screens/favorites";
 
const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeScreen}/>
    <Route exact path='/discovery' component={DiscoveryScreen} />
    <Route exact path='/search' component={SearchScreen} />
    <Route exact path='/album/:id' component={AlbumScreen} />
    <Route exact path='/favorites' component={FavoritesScreen} />
  </Switch>
);
 
export default Routes;