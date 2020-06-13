import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";

const Links = () => {
  return (
    <ul>
      <li>
        <NavLink to="/faq/swimming">Demo router One</NavLink>
      </li>
      <li>
        <NavLink to="/faq/waterpolo">Demo router Two</NavLink>
      </li>
    </ul>
  );
}

const DemoLinks = () => {
  return (
    <div>
      <h1 className="Header">React Router</h1>
      <Links />
      <Switch>
        <Route path="/faq/swimming" component={() => <div>Clicked Demo router One</div>} />
        <Route path="/faq/waterpolo" component={() => <div>Clicked Demo router Two</div>} />
      </Switch>
    </div>
  );
}
export default DemoLinks