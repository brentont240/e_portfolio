// import waveDivider from "../assets/layeredWaves.svg";
import { Box, Paper, Typography, Container, Grid, Divider } from "@mui/material";

// maybe get the thing to work idk????
function Footer() {
    return (
        // change to box component header?
        <footer>
            <Box
                sx={{
                    // height: 100,
                    // backgroundColor: "action.disabledBackground"
                }}
            >
                {/* <Typography variant="h3" color="primary.main" align="center" mt={1}>Footer here?</Typography> */}
                {/* <Box sx={{ width: "100%" }}>
              <img 
                    src={waveDivider} 
                    alt="divider"
                    style={{ 
                      width: "100%",
                      display: "block"
                    }}
                  />
            </Box> */}
                <Paper
                    variant="elevation"
                    elevation="2"
                    square={true}
                    sx={{ 
                      //  TODO: IS THIS NEEDED ANY MORE?
                      // height: "100%" 
                    }}
                >
                    <Container maxWidth="xl">
                      <Grid container spacing={0} sx={{}}>
                        <Grid size={{ xs: 12, md: 6 }}>
                          <Typography
                            variant="h3"
                            color="primary.main"
                            // align="center"
                            mt={1}
                        >
                            Footer here?
                        </Typography>
                        </Grid>
                      </Grid>
                        {/* <Typography
                            variant="h3"
                            color="primary.main"
                            align="center"
                            mt={1}
                        >
                            Footer here?
                        </Typography> */}
                        <Divider
                          variant="fullWidth"
                          orientation="horizontal"
                        />
                        <Typography variant="body1" color="text.secondary" align="center" sx={{ }}>
                          {/* see how to add spacing here??? */}
                          © {new Date().getFullYear()} Brenton Trebilcock
                        </Typography>
                    </Container>
                </Paper>
            </Box>
        </footer>
    );
}

export default Footer;
