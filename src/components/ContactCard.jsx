import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
} from "@mui/material";
import IconImg from "./IconImg";

function ContactCard({ contacts }) {
    // TODO: ADD KEYS
    return (
        <Box>
            <Grid container spacing={2}>
                {contacts.map((contact, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                        {/* TODO: ADD COOL NEON BORDER??? */}
                        <Card sx={{ height: "100%" }} className="hoverGrow">
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h3"
                                    color="primary.light"
                                >
                                    <IconImg
                                        iconName={contact.icon}
                                        size={"inherit"}
                                    />{" "}
                                    {contact.name}
                                </Typography>
                                <Typography
                                    // gutterBottom
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    {contact.link}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {contact.type === "email" ? (
                                    <Button
                                        size="small"
                                        variant="contained"
                                        onClick={() => {
                                            window.location.href = `mailto:${contact.link}`;
                                        }}
                                    >
                                        Send Email
                                    </Button>
                                ) : (
                                    <Button
                                        size="small"
                                        variant="contained"
                                        onClick={() => {
                                            window.open(contact.link, "_blank");
                                        }}
                                    >
                                        Visit
                                    </Button>
                                )}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ContactCard;
