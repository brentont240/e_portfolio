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
// import proficientSkills from "../data/proficientSkills.json";
// import familiarSkills from "../data/familiarSkills.json";
import skills from "../data/skills.json";
import education from "../data/education.json";
import work from "../data/work.json";
import SkillSection from "../components/experience/SkillSection.jsx";
import EducationCard from "../components/experience/EducationCard.jsx";
import WorkCard from "../components/experience/WorkCard.jsx";
import { CheckScreenSize } from "../utils/checkScreenSize.js";
import { useLocation } from "react-router-dom";

const PDF_MAX_HEIGHT = "800px"
const SCROLL_MARGIN_OFFSET = "70px"

const experienceSectionStyle = {
    my: 2,
    scrollMarginTop: SCROLL_MARGIN_OFFSET
}

function Experience() {
    const location = useLocation();

    const scrollToSection = (id, smooth) => {
        const section = document.getElementById(id);
        // console.log(section);
        if (section) {
            section.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
        }
    };

    // FIXME: SEE IF THIS IS EVEN WORKING!!??
    const iFrameAdjust = () => {
        let iFrame = document.getElementById("resume")
        iFrame = iFrame.querySelector("iframe")

        console.log(iFrame)

        if (iFrame) {
            // iFrame.style.height = "400px"
            // iFrame.style.height = iFrame.contentWindow.document.body.scrollHeight + "px"
            console.log(iFrame.contentWindow.document.body.scrollHeight + "px")
        }
    }

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
                    <Box sx={experienceSectionStyle} id="skills">
                        <Divider className="sectionDividerPrimary">
                            <Typography variant="h2">Skills</Typography>
                        </Divider>
                        <SkillSection
                            title={"Proficient"}
                            skills={skills.proficient}
                        />
                        <Box sx={{ mb: 2 }} />
                        <SkillSection
                            title={"Familiar With"}
                            skills={skills.familiar}
                        />
                    </Box>
                    <Box sx={experienceSectionStyle} id="education">
                        <Divider
                            className="sectionDividerPrimary"
                            sx={{ mb: 2 }}
                        >
                            <Typography variant="h2">Education</Typography>
                        </Divider>
                        <EducationCard education={education} />
                    </Box>
                    <Box
                        sx={experienceSectionStyle}
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
                    <Box sx={experienceSectionStyle} id="resume">
                        <Divider
                            className="sectionDividerPrimary"
                            sx={{ mb: 2 }}
                        >
                            <Typography variant="h2">Resume</Typography>
                        </Divider>
                        {/* fix things for this to look better */}
                        <iframe
                            // src={"/e_portfolio/brentonResume.pdf"}
                            // #zoom=FitW not sure if this is working or not
                            src={`/e_portfolio/brentonResume.pdf${ CheckScreenSize("sm") ? "#zoom=FitW" : ""}`}
                            type="application/pdf"
                            style={{
                                width: "100%",
                                height: `min(100vh, ${PDF_MAX_HEIGHT})`,
                                border: "none"
                            }}
                            onLoad={iFrameAdjust}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Experience;
