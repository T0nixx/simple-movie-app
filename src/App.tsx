import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App(): JSX.Element {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/detail/:id" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
