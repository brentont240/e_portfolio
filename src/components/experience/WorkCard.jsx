import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

function WorkCard({ work }) {
    return (
        <Box>
            <Grid container spacing={3}>
                {work.map((item, index) => (
                    <Grid size={{ xs: 12, md: 6 }} key={index}>
                        <Card sx={{ height: "100%" }} className="hoverGrow">
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h4"
                                    color="secondary.main"
                                >
                                    {item.companyName}
                                </Typography>
                                <Typography
                                    // gutterBottom
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{ fontStyle: "italic" }}
                                >
                                    {item.from} - {item.to}
                                </Typography>
                                <Typography gutterBottom variant="body1">
                                    {item.jobTitle}
                                </Typography>
                                <ul>
                                    <Typography variant="body1">
                                        {item.details.map((detail, index) => (
                                            <li key={index}>{detail}</li>
                                        ))}
                                    </Typography>
                                </ul>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default WorkCard;
