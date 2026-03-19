import React from "react";
import {
    Box,
    Typography,
    Container,
    Divider,
    Button,
    ButtonGroup,
    Paper,
} from "@mui/material";
import proficientSkills from "../data/proficientSkills.json";
import familiarSkills from "../data/familiarSkills.json";
import SkillSection from "../components/SkillSection.jsx";
import SkillCard from "../components/SkillCard";
import Accordion from "@mui/material/Accordion";

function Experience() {
    // FIXME: get the resume link to scroll down to the resume section when clicked

    return (
        // <Box sx={{ width: "100%" }}>
        //     <Typography variant="h1">Test</Typography>
        //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, non, quia rerum ullam distinctio repellat quam saepe fuga iure quibusdam minus repudiandae perferendis quaerat eum magni voluptates ipsam accusamus nam!
        // </Box>
        <Box>
            <Container maxWidth="xl">
                <Box>
                    <Typography variant="h1" align="center" sx={{ mt: 2 }}>
                        Experience
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",                          
                            justifyContent: "center",
                            my: 2,
                        }}
                    >
                        <ButtonGroup
                            variant="contained"
                            aria-label="Basic button group"
                            size="large"
                            // FIXME: get this to work? or something similar?
                            // orientation={{ xs: "vertical", sm: "horizontal" }}
                        >
                            {/* TODO: IF I WANT LINKS TO THE DIFFERENT SECTIONS I CAN USE THIS (IDK IF IT'S NEEDED OR NOT?) */}
                            <Button>Skills</Button>
                            <Button href="#education">Education</Button>
                            <Button>Work Experience</Button>
                            <Button href="#resume">Resume</Button>
                        </ButtonGroup>
                    </Box>
                    <Typography variant="h2">Skills</Typography>
                    <SkillSection
                        title={"Proficient"}
                        skills={proficientSkills}
                    />
                    {/* add some space here */}
                    <SkillSection
                        title={"Familiar With"}
                        skills={familiarSkills}
                    />
                    <Box sx={{ my: 2 }} id="education">
                        <Typography variant="h2">Education</Typography>
                    </Box>
                    <Box sx={{ my: 2 }} id="resume">
                        <Typography variant="h2">Resume</Typography>
                        {/* fix things for this to look better */}
                        <iframe
                            src={"/e_portfolio/brentonResume.pdf"}
                            type="application/pdf"
                            width="100%"
                            height="750px"
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Experience;
