import React, { useEffect } from "react";
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
import { useLocation } from "react-router-dom";

function Experience() {
    const location = useLocation();

    const scrollToSection = (id, smooth) => {
        const section = document.getElementById(id);
        console.log(section);
        if (section) {
            section.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
        }
    };

    useEffect(() => {
        // jumps to resume section if the button is clicked in the navbar
        if (location.hash === "#resume") {
            scrollToSection("resume", false);
        }
    });

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
                            orientation={
                                CheckScreenSize("xs")
                                    ? "vertical"
                                    : "horizontal"
                            }
                        >
                            {/* TODO: IF I WANT LINKS TO THE DIFFERENT SECTIONS I CAN USE THIS (IDK IF IT'S NEEDED OR NOT?) */}
                            {/* FIXME: make it work better on mobile !!! */}
                            <Button
                                onClick={() => scrollToSection("skills", true)}
                            >
                                Skills
                            </Button>
                            <Button
                                onClick={() =>
                                    scrollToSection("education", true)
                                }
                            >
                                Education
                            </Button>
                            <Button
                                onClick={() =>
                                    scrollToSection("workExperience", true)
                                }
                            >
                                Work Experience
                            </Button>
                            <Button
                                onClick={() => scrollToSection("resume", true)}
                            >
                                Resume
                            </Button>
                        </ButtonGroup>
                    </Box>
                    {/* TODO: Add more skills and other things that aren't on resume!!! !!! !!! !!! */}
                    {/* FIXME: ADD VITE TESTING TO RESUME AND UPDATE AGRIPPON TEXT !!! !!! !!! !!! */}
                    <Box sx={{ my: 2, scrollMarginTop: 70 }} id="skills">
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
                    <Box sx={{ my: 2, scrollMarginTop: 70 }} id="education">
                        <Divider
                            className="sectionDividerPrimary"
                            sx={{ mb: 2 }}
                        >
                            <Typography variant="h2">Education</Typography>
                        </Divider>
                        <EducationCard education={education} />
                    </Box>
                    <Box
                        sx={{ my: 2, scrollMarginTop: 70 }}
                        id="workExperience"
                    >
                        <Divider
                            className="sectionDividerPrimary"
                            sx={{ mb: 2 }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    whiteSpace: {
                                        xs: "normal",
                                        sm: "nowrap",
                                    },
                                }}
                            >
                                Work Experience
                            </Typography>
                        </Divider>
                        <WorkCard work={work} />
                    </Box>
                    <Box sx={{ my: 2, scrollMarginTop: 70 }} id="resume">
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
