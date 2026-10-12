import { Box, Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { GradFlow } from "gradflow";
import HomeIcon from "@mui/icons-material/Home";
import { gradFlowPalette, gradFlowBox } from "../styles/gradFlowStyles.js";

function PageNotFound() {
    return (
        <Box>
            <Box
                sx={{  ...gradFlowBox }}
            >
                {/* from https://gradflow.meera.dev/ */}
                <GradFlow
                    config={{
                        ...gradFlowPalette,
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
