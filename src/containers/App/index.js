import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//component
import  SelectLanguage  from "../../components/SelectLanguage";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={SelectLanguage} />
            {/* <Route />
            <Route />
            <Route /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
