import {
    Box,
    Paper,
    Typography,
    Container,
    Grid,
    Divider,
    Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
    return (
        <Box component="footer">
            <Paper
                variant="elevation"
                elevation="2"
                square={true}
                sx={{
                    py: 2,
                }}
            >
                <Container maxWidth="xl">
                    <Grid
                        container
                        spacing={2}
                        sx={{ mb: 2, justifyContent: "center" }}
                    >
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Typography variant="h4">
                                Brenton Trebilcock
                            </Typography>
                            <Typography variant="subtitle1">
                                Software Developer
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Typography variant="h4">Get in touch</Typography>
                            <Link
                                href="https://www.linkedin.com/in/brenton-trebilcock/"
                                target="_blank"
                                rel="noopener"
                                sx={{
                                    "&:hover": {
                                        color: "primary.light",
                                    },
                                }}
                            >
                                <LinkedInIcon fontSize="large" />
                            </Link>
                            <Link
                                href="https://github.com/brentont240"
                                target="_blank"
                                rel="noopener"
                                sx={{
                                    "&:hover": {
                                        color: "primary.light",
                                    },
                                }}
                            >
                                <GitHubIcon fontSize="large" />
                            </Link>
                        </Grid>
                    </Grid>
                    <Divider variant="fullWidth" orientation="horizontal" />
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        align="center"
                        sx={{ mt: 2 }}
                    >
                        © {new Date().getFullYear()} Brenton Trebilcock. Created
                        using React, Javascript, and Material UI.
                    </Typography>
                </Container>
            </Paper>
        </Box>
    );
}

export default Footer;
