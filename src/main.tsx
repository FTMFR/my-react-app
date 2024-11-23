import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import "@fontsource/niramit/300.css";
import "@fontsource/niramit/400.css";
import "@fontsource/niramit/500.css";
import "@fontsource/niramit/700.css";

let theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  typography: {
    fontFamily: "Niramit",
  },
});

theme = responsiveFontSizes(theme);

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
