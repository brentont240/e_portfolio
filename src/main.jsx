import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./styles/theme";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import "./styles/App.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </ThemeProvider>
    </StrictMode>
);
