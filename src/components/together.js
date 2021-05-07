import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";    //react-router-dom


                              //components
import App from './App';
import Header from './header';
import Contact from './about';


export default function Together() {
  return (
    <Router>
      <div>
                <Header/>
                    <br></br>
                <Switch>
                    <Route path="/about">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <App />
                    </Route>
                </Switch>
    </div>
    </Router>
  );
}

