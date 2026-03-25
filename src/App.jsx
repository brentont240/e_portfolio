import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ROUTES } from "./routes";
import Analytics from "./components/Analytics"
// import ReactGA from "react-ga4";
// import Home from "./pages/Home";

function App() {
    return (
        <Router basename="/e_portfolio">
            <Analytics />
            <Navbar />
            <main>
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
            </main>
            <Footer />
        </Router>
    );
}

export default App;
