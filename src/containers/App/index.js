import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//component
import  SelectLanguage  from "../../components/SelectLanguage";
import NewAccount from "../../components/NewAccount";
import Security from "../../components/Security";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={SelectLanguage} />
            <Route path='/register' component={NewAccount} />
            <Route path='/security' component={Security} />

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
