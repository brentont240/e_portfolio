import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Divider,
    CardMedia,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import myAgencySystem from "../images/myAgencySystem.png"


function ProjectCard({ projects }) {

    const imgMap = {
        myAgencySystem: myAgencySystem
    };

    return (
        //TODO: FIX ISSUE WITH KEYS!!!!
        <Box>
            <Grid container spacing={3}>
                {projects.map((project, index) => (
                    // should the key be different???!!!
                    <Grid size={{ xs: 12, md: 6 }} key={index}>
                        <Card
                            sx={{
                                height: "100%",
                                // FIXME: SEE IF THIS IS GOOD TO DO OR NOT
                                // not sure
                                boxShadow: (theme) =>
                                    `0px 0px 10px 3px ${alpha(theme.palette.secondary.main, 0.75)}`,
                            }}
                            className="hoverGrow"
                        >
                        <CardMedia
                            sx={{ height: 175, objectFit: "cover"}}
                                // TODO: see if i should include images or not!!!
                                // TODO: see if i should include images or not!!!
                                // TODO: see if i should include images or not!!!
                                image={imgMap[project.img]}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    // gutterBottom
                                    variant="h3"
                                    color="primary.light"
                                    // align="center"
                                >
                                    {project.title}
                                </Typography>
                                {/* <Divider
                                  variant="fullWidth"
                                  orientation="horizontal"
                                  sx={{
                                    borderColor: "secondary.main",
                                    borderWidth: 2,
                                  }}        
                                  
                                /> */}
                                <Typography
                                    // gutterBottom
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{ fontStyle: "italic" }}
                                ></Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProjectCard;
