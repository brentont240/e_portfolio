import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link, useLocation } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ROUTES } from "../routes";
import Stack from "@mui/material/Stack";

const drawerWidth = 240;

// TODO: fix so the width is better and doesnt bug out??!!!

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const location = useLocation();

    // console.log(location);
    // const isActive = location.pat

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    // TODO: add active button logic here as well?
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <List>
                {ROUTES.map((route) => (
                    <ListItem key={route.path} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: "center" }}
                            component={Link}
                            to={route.path}
                        >
                            <ListItemText primary={route.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <header>
            <AppBar component="nav" color="primary" enableColorOnDark>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { sm: "block" } }}
                    >
                        Brenton Tebilcock
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <Stack direction="row" spacing={1}>
                            {ROUTES.map((route) => {
                                const isActive = route.path === location.pathname;
                                // TODO: see if this is how we want to do active links!
                                return (
                                    <Button
                                        key={route.path}
                                        sx={{
                                            backgroundColor: isActive
                                                ? "secondary.main"
                                                : "",
                                            "&:hover": {
                                                backgroundColor: isActive
                                                    ? "secondary.main"
                                                    : "secondary.dark",
                                            },
                                            // if you want to use borders instead?
                                            // border: "1px solid",
                                            // borderColor: "secondary.main",
                                            color: "#fff",
                                        }}
                                        component={Link}
                                        to={route.path}
                                    >
                                        {route.name}
                                    </Button>
                                );
                            })}
                        </Stack>
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ ml: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    anchor="right" // Makes drawer slide from right
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Toolbar /> {/* creates empty space */}
            </nav>
        </header>
    );
}

export default Navbar;
