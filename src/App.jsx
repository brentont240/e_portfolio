import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ROUTES } from "./routes";
import ReactGA from "react-ga4";
import { useEffect } from "react";
// import Home from "./pages/Home";

function App() {
    const location = useLocation();

    useEffect(() => {
        ReactGA.initialize("G-17RXCQBFL2");
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    });

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location]);

    return (
        <Router basename="/e_portfolio">
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
