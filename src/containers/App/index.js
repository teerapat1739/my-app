import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//component
import  General  from "../General";
import NewAccount from "../NewAccount";
import Security from "../Security";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={General} />
            <Route path='/register' component={NewAccount} />
            <Route path='/security' component={Security} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
