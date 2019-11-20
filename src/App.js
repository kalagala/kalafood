import React from "react";
import history from "./history";
import { Route, Router } from "react-router-dom";
import "./assets/styles/app.css";
import Landing from "./routes/Landing";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Route path="/" component={Landing} />
        </Router>
      </div>
    );
  }
}

export default App;
