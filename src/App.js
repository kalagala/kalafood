import React from "react";
import history from "./history";
import { Route, Router } from "react-router-dom";
import "./assets/styles/app.css";
import Landing from "./routes/Landing";
import Login from "./routes/Login";
import TermsOfService from "./routes/TermsOfService";
import PrivacyPolicy from "./routes/PrivacyPolicy";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Route path="/" exact component={Landing} />
          <Route path="/login" exact component={Login} />
          <Route path="/terms-of-service" exact component={TermsOfService} />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
        </Router>
      </div>
    );
  }
}

export default App;
