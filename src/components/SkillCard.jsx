import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    // useTheme,
    // useMediaQuery,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import IconImg from "./IconImg";

function SkillCard({ skills }) {
    // https://mui.com/material-ui/react-use-media-query/
    // const theme = useTheme();
    // const isXs = useMediaQuery(theme.breakpoints.down("sm"))
    // console.log("is xs?", isXs)
    return (
        <Box>
            {/* TODO: make it so only one is shown on the smallest screens */}
            <Grid container spacing={2}>
                {skills.map((skill) => (
                    // FIXME: get the sizing to be correct (for everything in here)
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={skill.category}>
                        {/* height 100% makes it so they are same height */}
                        <Card sx={{ height: "100%" }} className="hoverGrow">
                            <CardContent>
                                <Divider>
                                    <Box
                                        sx={{
                                            border: 1,
                                            borderColor: "secondary.main",
                                            p: 1,
                                            borderRadius: 1,
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            // variant={isXs ? "h4" : "h5"}
                                            color="secondary"
                                            align="center"
                                        >
                                            <IconImg iconName={skill.icon} />{" "}
                                            {skill.category}
                                        </Typography>
                                    </Box>
                                </Divider>
                                <List
                                    sx={{
                                        // check that this is good!!
                                        columnCount: {
                                            lg: 2,
                                            xs: 1,
                                        },
                                        columnGap: 1,
                                    }}
                                >
                                    {skill.skills.map((currentSkill) => (
                                        <ListItem key={currentSkill}>
                                            <ListItemIcon>
                                                <CheckCircleOutlineIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={currentSkill}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default SkillCard;
