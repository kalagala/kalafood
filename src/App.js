import React from "react";
import history from "./history";
import { Route, Router } from "react-router-dom";
import "./assets/styles/app.css";
import Landing from "./routes/Landing";
import Login from "./routes/Login";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Route path="/" exact component={Landing} />
          <Route path="/login" exact component={Login} />
        </Router>
      </div>
    );
  }
}

export default App;
