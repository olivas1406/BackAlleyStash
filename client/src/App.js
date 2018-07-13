import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AssetTracker from "./pages/AssetTracker";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import Stash from "./pages/Stash";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// app.js
...
var RedisStore = require('connect-redis')(session);
var redis = require('heroku-redis-client');
...

app.use(session({
  store: new RedisStore({client: redis.createClient()}),
  secret: "i love dogs",
  resave: false, saveUnitialized: false
}));

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AssetTracker" component={AssetTracker} />
        <Route exact path="/Stash" component={Stash} />
        <Route exact path="/Logout" component={Logout} />
      </Switch>
    </div>
  </Router>
);

export default App;