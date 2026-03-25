import { Box, Typography, Container, Card, CardContent, CardActions, Button, CardMedia } from "@mui/material";
import ProjectCard from "../components/ProjectCard.jsx";
// import projects from "../data/projects.json"

function Projects() {
    return (
        <Box>
            <Container maxWidth="xl">
                <Typography variant="h1" align="center" sx={{ my: 2 }}>
                    Projects
                </Typography>
            {/* TODO: see if there is a way to just show a preview image of a site */}
            <Box sx={{ my: 2 }}>
                {/* <ProjectCard projects={projects} /> */}
                <Typography variant="h2" align="center" sx={{ mb: 2 }}>
                    In Development ...
                </Typography>
            </Box>
            </Container>
        </Box>
    );
}

export default Projects;
