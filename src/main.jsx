import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";

import { AuthProvider } from "./hooks/auth";

import theme from "./styles/theme";

// Rotas
import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

{
  /* 
<ThemeProvider theme={theme}> dessa forma eu compartilho com todos os elementos filhos o meu theme
  <Details />
</ThemeProvider>; 
*/
}
