import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import defaulTheme from "./styles/theme/default";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ThemeProvider theme={defaulTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
);
