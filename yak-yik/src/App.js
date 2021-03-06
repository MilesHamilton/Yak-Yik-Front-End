import React from "react";
import "./App.css";
import Menu from "./Menu.js";
import Postlist from "./Postlist.js";
import Postpage from "./Postpage.js";
import Memelist from "./Memelist.js";
import Memepage from "./Memepage.js";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route
          path="/memes/:id"
          render={(props) => {
            return <Memepage {...props} />;
          }}
        />

        <Route
          path="/memes"
          render={(props) => {
            return <Memelist {...props} />;
          }}
        />

        <Route
          path="/posts/:id"
          render={(props) => {
            return <Postpage {...props} />;
          }}
        />
        <Route path="/">
          <Postlist />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
