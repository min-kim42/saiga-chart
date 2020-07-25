import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Music from "./routes/Music";

function App() {
  return (
    <HashRouter>
      {/* exact parameter needed to prevent partial matching */}
      <Route path="/" exact={true} component={Music} />
    </HashRouter>
  );
}

export default App;
