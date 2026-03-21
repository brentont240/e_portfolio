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
import education from "../data/education.json";
import work from "../data/work.json";
import SkillSection from "../components/SkillSection.jsx";
import EducationCard from "../components/EducationCard.jsx";
import WorkCard from "../components/WorkCard.jsx";
import { CheckScreenSize } from "../utils/checkScreenSize.js";

function Experience() {
    // FIXME: get the resume link to scroll down to the resume section when clicked (top button!!!)

    return (
        <Box>
            <Container maxWidth="xl">
                <Box>
                    <Typography
                        variant={CheckScreenSize("xs") ? "h2" : "h1"}
                        align="center"
                        sx={{ mt: 2 }}
                    >
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
                            // fullWidth
                            aria-label="Basic button group"
                            size="large"
                            // FIXME: get this to work? or something similar?
                            // orientation={{ xs: "vertical", sm: "horizontal" }}
                            orientation={CheckScreenSize("xs") ? "vertical" : "horizontal"}
                        >
                            {/* TODO: IF I WANT LINKS TO THE DIFFERENT SECTIONS I CAN USE THIS (IDK IF IT'S NEEDED OR NOT?) */}
                            {/* FIXME: make it work better on mobile !!! */}
                            <Button href="#skills">Skills</Button>
                            <Button href="#education">Education</Button>
                            <Button href="#workExperience">
                                Work Experience
                            </Button>
                            <Button href="#resume">Resume</Button>
                        </ButtonGroup>
                    </Box>
                    <Box sx={{ my: 2 }} id="skills">
                        <Divider className="sectionDividerPrimary">
                            <Typography variant="h2">Skills</Typography>
                        </Divider>
                        <SkillSection
                            title={"Proficient"}
                            skills={proficientSkills}
                        />
                        <Box sx={{ mb: 2 }} />
                        <SkillSection
                            title={"Familiar With"}
                            skills={familiarSkills}
                        />
                    </Box>
                    <Box sx={{ my: 2 }} id="education">
                        <Divider
                            className="sectionDividerPrimary"
                            sx={{ mb: 2 }}
                        >
                            <Typography variant="h2">Education</Typography>
                        </Divider>
                        <EducationCard education={education} />
                    </Box>
                    <Box sx={{ my: 2 }} id="workExperience">
                        <Divider
                            className="sectionDividerPrimary"
                            sx={{ mb: 2 }}
                        >
                            {/* TODO: GET THIS TO WORK ON MOBILE (NOT JUST MAKE TEXT SMALLER!!!) */}
                            <Typography variant="h2">
                                Work Experience
                            </Typography>
                        </Divider>
                        <WorkCard work={work} />
                    </Box>
                    <Box sx={{ my: 2 }} id="resume">
                        <Divider
                            className="sectionDividerPrimary"
                            sx={{ mb: 2 }}
                        >
                            <Typography variant="h2">Resume</Typography>
                        </Divider>
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
