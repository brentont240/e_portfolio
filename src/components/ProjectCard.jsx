import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardActions,
    Divider,
    CardMedia,
    Button,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import myAgencySystem from "../images/myAgencySystem.png"
import scamSentry from "../images/scamSentry.png"
import policyServiceCenter from "../images/policyServiceCenter.png"
import activeLife from "../images/activeLife.png"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const CARD_IMG_HEIGHT = "175PX"

function ProjectCard({ projects }) {

    const imgMap = {
        myAgencySystem: myAgencySystem,
        scamSentry: scamSentry,
        policyServiceCenter: policyServiceCenter,
        activeLife: activeLife
    };

    return (
        <Box>
            <Grid container spacing={3}>
                {projects.map((project, index) => (
                    <Grid size={{ xs: 12, md: 6 }} mb={2} key={index}>
                        <Card
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                boxShadow: (theme) =>
                                    `0px 0px 10px 2px ${alpha(theme.palette.secondary.main, 0.75)}`,
                            }}
                            className="hoverGrow"
                        >
                        <CardMedia
                            sx={{ height: CARD_IMG_HEIGHT, objectFit: "cover"}}
                                image={imgMap[project.img]}
                                alt={"Preview image for " + project.title}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography
                                    mb={1}
                                    variant="h2"
                                    color="primary.light"
                                >
                                    {project.title}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{ fontStyle: "italic" }}
                                >
                                    <strong>Project Type:</strong> {project.type}<br />
                                    <strong>At:</strong> {project.where}<br />
                                    <strong>Tools used:</strong> {project.tools}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.primary"
                                >
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Button
                                    size=""
                                    variant="contained"
                                    onClick={() => {
                                        window.open(project.url, "_blank");
                                    }}
                                    endIcon={<OpenInNewIcon />}
                                >
                                    Visit Site
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProjectCard;
