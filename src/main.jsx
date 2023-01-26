import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";

import theme from "./styles/theme";

import { Details } from "./pages/Details";
import { Home } from "./pages/Home";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);

{/* 
<ThemeProvider theme={theme}> dessa forma eu compartilho com todos os elementos filhos o meu theme
  <Details />
</ThemeProvider>; 
*/}
