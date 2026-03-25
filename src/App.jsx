import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ROUTES } from "./routes";
import Analytics from "./components/Analytics";
import { Box } from "@mui/material";
// import ReactGA from "react-ga4";
// import Home from "./pages/Home";

function App() {
    return (
        <Router basename="/e_portfolio">
            <Analytics />
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Navbar />
                <Box component="main" sx={{ flex: 1 }}>
                    <Routes>
                        {/* <Route path="/" element={<Home />} /> */}
                        {/* ROUTES */}
                        {ROUTES.map((route) => {
                            // console.log(route)
                            const Component = route.Component;
                            const path = route.path;
                            return (
                                <Route
                                    path={path}
                                    key={path}
                                    element={<Component />}
                                />
                            );
                        })}
                    </Routes>
                </Box>
                <Footer />
            </Box>
        </Router>
    );
}

export default App;
