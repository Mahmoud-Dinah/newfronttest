import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
 
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header';
import Main from './components/Main';
import Favorite from './components/Favorite';


export class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
       <Header />
        <Switch>
          <Route exact path="/">
            {/* render our homepage component */}
            <Main />
          </Route>
          <Route exact path="/Favorite">
            {/* render the component responsible for rendering the favorites   */}
            <Favorite />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
    )
  }
}

export default App
