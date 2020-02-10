import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ListContainer from "./components/ListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={ListContainer} />
        </Switch>
      </div>
    );
  }
}
export default App;
