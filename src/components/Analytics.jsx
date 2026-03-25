import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect } from "react";

function Analytics() {
    const location = useLocation();

    useEffect(() => {
        ReactGA.initialize("G-17RXCQBFL2");
    });

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location]);

    return null;
}

export default Analytics;
