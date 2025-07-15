import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, StyleReset } from "atomize";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import App from "./App.jsx";
import "./index.css";

const engine = new Styletron();

const theme = {
  colors: {
    primary: "#4361ee",
    accent: "#3f37c9",
    success: "#4CAF50",
    info: "#2196F3",
  },
  fontFamily: {
    primary: "Inter, system-ui, sans-serif",
  },
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyletronProvider value={engine}>
      <ThemeProvider theme={theme}>
        <StyleReset />
        <App />
      </ThemeProvider>
    </StyletronProvider>
  </StrictMode>
);
