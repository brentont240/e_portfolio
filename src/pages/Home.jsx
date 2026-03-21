import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    Divider,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
// import topDivider from "../assets/topWaves.svg";
import avatarImg from "../images/avatarImg.jpg";
import { GradFlow } from "gradflow";
import { CheckScreenSize } from "../utils/checkScreenSize.js";

// TODO: play with some of the colors for dark mode?
// TODO: make it look better on smaller and larger
// TODO: make it look better on mobile!!!

function Home() {
    // console.log(topDivider);
    return (
        // header idea: https://www.finisher.co/lab/header/
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
                        scale: 1,
                        type: "stripe",
                    }}
                />
            </Box>
            <Container maxWidth="xl">
                {/* maybe use grow and make it flexable */}
                {/* FIXME: make the text shrink for smaller screens */}
                <Grid
                    container
                    spacing={2}
                    // mt={4}
                    alignItems="center"
                    direction={{ xs: "column", md: "row" }}
                    sx={{ minHeight: "100vh" }}
                >
                    {/* TODO: play with the sizes to get it looking good!!!! */}
                    {/* TODO: play with the sizes to get it looking good!!!! */}
                    {/* <Grid size={{ xs: 10, md: 8, lg: 7 }}> */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant={CheckScreenSize("xs") ? "h2" : "h1"}>Brenton Trebilcock</Typography>
                        <Typography variant={CheckScreenSize("xs") ? "h3" : "h2"}>Software Developer</Typography>
                    </Grid>
                    {/* TODO: play with the sizes to get it looking good!!! */}
                    {/* TODO: play with the sizes to get it looking good!!!! */}
                    {/* <Grid size={{ xs: 10, md: 6, lg: 5 }}> */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        {/* <Grid size="grow"> */}
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    image={avatarImg}
                                    title="Picture of Brenton"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h4"
                                        component="div"
                                    >
                                        About Me
                                    </Typography>
                                    <Typography variant="body1">
                                        I am a highly motivated individual who
                                        is passionate about software engineering
                                        and creative problem solving. My
                                        expertise lies in full stack web
                                        development, with a strong foundation in
                                        Java, Python, JavaScript, HTML, CSS,
                                        Node.js, and C++. I have a bachelor's
                                        degree in computer science from
                                        BYU-Idaho.
                                        <br />
                                        <br />I am currently looking for full
                                        time jobs in software engineering, web
                                        development, software development, or
                                        other related field.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Home;

// TODO: add page titles and such for this? (in a component?)

// TODO: MAKE COMPONETS FOR THINGS LIKE SKILL CARDS, JOB EXPERIENCE ETC, PROJECTS. (THEN PERHAPS JUST MAKE SOME JSON FILES AND LOAD IT ALL UP BABY!!!)

// maybe find a cool background / shader to use

// TODO: make it so that i only use ' or "!!!!!

// use prettier on the pages!!!!!!!!

// TODO: use this to show projects */}
// {/* <iframe
//   src="https://scamsentry.netlify.app/"
//   width="100%"
//   height="600px"
//   style={{ border: 'none' }}
//   title="PDF Viewer"
// />

// Note: Column widths are integer values between 1 and 12. For example, an item with size={6} occupies half of the grid container's width.
// https://mui.com/material-ui/react-grid/

// FIXME: NOTE THINGS LIKE MY={} WILL BE REMOVED USED SX={MY:} INSTEAD!!!! (SEE DOCUMENTATION)
