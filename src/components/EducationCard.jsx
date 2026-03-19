import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

function EducationCard({ education }) {
    // TODO: ADD KEYS
    return (
        <Box>
            <Grid container spacing={3}>
                {education.map((item) => (
                    <Grid size={{ xs: 12, md: 6 }} key={item.school}>
                        <Card sx={{ height: "100%" }} className="hoverGrow">
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h4"
                                    color="secondary.main"
                                >
                                    {item.school}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{ fontStyle: "italic" }}
                                >
                                    Graduated in {item.dateGraduated}
                                </Typography>
                                <Typography variant="body1">
                                    {item.degree}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default EducationCard;
