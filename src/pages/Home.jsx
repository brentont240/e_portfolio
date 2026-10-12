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
// import {useTheme} from "@mui/material";
import { gradFlowPalette, gradFlowBox } from "../styles/gradFlowStyles.js";

// TODO: play with some of the colors for dark mode?
// TODO: make it look better on smaller and larger
// TODO: make it look better on mobile!!!

function Home() {
    return (
        // header idea: https://www.finisher.co/lab/header/
        <Box>
            <Box
                sx={{ ...gradFlowBox }}
            >
                {/* from https://gradflow.meera.dev/ */}
                <GradFlow
                    config={{
                        ...gradFlowPalette,
                        speed: 0.5,
                        scale: 1,
                        type: "stripe",
                    }}
                />
            </Box>
            <Container maxWidth="xl">
                {/* maybe use grow and make it flexible */}
                {/* FIXME: make the text shrink for smaller screens */}
                {/* FIXME: make the image better centered vertically (extra top space on large screens) */}
                <Grid
                    container
                    spacing={2}
                    // mt={4}
                    alignItems="center"
                    direction={{ xs: "column", md: "row" }}
                    sx={{
                        minHeight: "100vh",
                        mb: {
                            xs: 2,
                            md: 0,
                        },
                    }}
                >
                    {/* TODO: play with the sizes to get it looking good!!!! */}
                    {/* <Grid size={{ xs: 10, md: 8, lg: 7 }}> */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography
                            variant={CheckScreenSize("xs") ? "h2" : "h1"}
                        >
                            Brenton Trebilcock
                        </Typography>
                        <Typography
                            variant={CheckScreenSize("xs") ? "h3" : "h2"}
                        >
                            Software Developer
                        </Typography>
                    </Grid>
                    {/* TODO: play with the sizes to get it looking good!!! */}
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

// https://reversebackflip.wixsite.com/brentoneportfolio
// old e-portfolio^^^^

// TODO: add page descriptions in the routes for the pages!!!!!!!!!
// TODO: add the color to the lines in thje experience skills?????????!!!!!!!!!


// TODO: TRY TO AVOID MAGIC NUMBERS!!! !!! !!!
// TODO: TRY TO AVOID MAGIC NUMBERS!!! !!! !!!
// TODO: TRY TO AVOID MAGIC NUMBERS!!! !!! !!! (use all caps_underscore_stuff)
// TODO: TRY TO AVOID MAGIC NUMBERS!!! !!! !!! (like how i fixed it in experience)

// TODO: ALSO IF STYLES ARE REUSED MAKE THEM A CONST ! (like how i fixed it in experience)

// TODO: Delete most comments when done!


// TODO: MAKE THE CARDS A BIT CLEANER / MODULAR (LOOK AT AppNewsUpdate IN AGRIPPON!!!)
// TODO: MAKE THE CARDS A BIT CLEANER / MODULAR (LOOK AT AppNewsUpdate IN AGRIPPON!!!)
// TODO: MAKE THE CARDS A BIT CLEANER / MODULAR (LOOK AT AppNewsUpdate IN AGRIPPON!!!)
// TODO: MAKE THE CARDS A BIT CLEANER / MODULAR (LOOK AT AppNewsUpdate IN AGRIPPON!!!)
// MAYBE USE SOMETHING WITH PROPS???
// actually might not be optimal...?
