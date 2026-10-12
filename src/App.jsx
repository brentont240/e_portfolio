import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ROUTES } from "./routes";
import Analytics from "./components/Analytics";
import { Box } from "@mui/material";
import ScrollToTop from "./components/scrollToTop";
import Page from "./components/Page";
// import ReactGA from "react-ga4";
// import Home from "./pages/Home";

function App() {
    return (
        <Router basename="/e_portfolio">
            <Analytics />
            <ScrollToTop />
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
                        {ROUTES.map((route) => {
                            const Component = route.Component;
                            const path = route.path;
                            return (
                                <Route
                                    path={path}
                                    key={path}
                                    element={
                                        <Page
                                            title={route.pageTitle}
                                            meta={
                                                <>
                                                    <meta
                                                        property="og:title"
                                                        content={
                                                            route.pageTitle
                                                        }
                                                    />
                                                    <meta
                                                        name="description"
                                                        content={
                                                            route.pageDescription
                                                        }
                                                    />
                                                    <meta
                                                        property="og:description"
                                                        content={
                                                            route.pageDescription
                                                        }
                                                    />
                                                </>
                                            }
                                        >
                                            <Component />
                                        </Page>
                                    }
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
