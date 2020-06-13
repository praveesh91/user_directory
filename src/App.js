import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Home, RouteDemo } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <MainLayout>
          {/* <Route exact path="/">
            <Redirect to="/one" component={Home} />
          </Route> */}
          <Route path="/one"  component={Home} />
          <Route path="/faq" component={RouteDemo} />
        </MainLayout>
      </Switch>
    </Router>
  );
}

export default App;
