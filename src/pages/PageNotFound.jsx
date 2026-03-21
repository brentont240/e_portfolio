import { Box, Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { GradFlow } from "gradflow";
import HomeIcon from "@mui/icons-material/Home";

function PageNotFound() {
    return (
        <Box>
            <Box
                sx={{
                    // so the gradflow is the background
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    zIndex: -1,
                    pointerEvents: "none",
                }}
            >
                {/* from https://gradflow.meera.dev/ */}
                <GradFlow
                    config={{
                        color1: "#673ab7",
                        color2: "#5ccebb",
                        color3: "#121212",
                        speed: 0.5,
                        scale: 1.5,
                        type: "smoke",
                    }}
                />
            </Box>
            <Box
                sx={{
                    height: "75vh",
                    alignContent: "center",
                    justifyContent: "center",
                    overflow: "auto",
                    textAlign: "center",
                }}
            >
                <Container maxWidth="xl">
                    <Typography variant="h1" gutterBottom>
                        404
                        <br />
                        Page not found
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<HomeIcon />}
                        component={Link}
                        to={"/"}
                    >
                        Go Home
                    </Button>
                </Container>
            </Box>
        </Box>
    );
}

export default PageNotFound;
