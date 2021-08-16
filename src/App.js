import React from "react";
import Router from "./routes/Router";
import { GlobalStyle } from "./GlobalStyle.js";
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  );
}

export default App;
