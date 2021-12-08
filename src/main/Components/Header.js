import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    useMediaQuery,
    Button,
    useScrollTrigger,
    Slide,
    Menu,
    MenuItem,
    ListItemIcon
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

// REACT APP IMPORTS
import Home from "./Pages/Home";
import College from "./Pages/College";
import About from "./Pages/About";
import Personal from "./Pages/Personal";
import Skills from "./Pages/Skills";
import Briefcase  from "./Pages/Briefcase";
import NotFoundPage from "./Pages/NotFoundPage";

//logo
import Logo from "../assets/img/logo.png";


// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    menuButtonDesktop: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction={"down"} in={!trigger}>
            {children}
        </Slide>
    );
}

const Header = (props) => {
    const classes = useStyles();
    const [anchor, setAnchor] = React.useState(null);
    const open = Boolean(anchor);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const handleMenu = (event) => {
    setAnchor(event.currentTarget);
    };
    return (
    <div className={classes.root}>
        <HideOnScroll {...props}>
        <BrowserRouter>
            <AppBar>
            <Toolbar>
                <Typography
                variant="h5"
                component="p"
                color="white"
                className={classes.title}  
                >
                <img src={Logo} alt="Logo" style={{width:'3rem', margin: 'auto'}} />
                </Typography>
                {isMobile ? (
                <>
                    <IconButton
                        style={{ color: 'white' }}
                        className={classes.menuButton}
                        edge="start"
                        aria-label="menu"
                        onClick={handleMenu}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchor}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right"
                        }}
                        KeepMounted
                        transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                        }}
                        open={open}
                    >
                        <MenuItem
                            onClick={() => setAnchor(null)}
                            component={Link}
                            to="/"
                            color="black"
                        >
                            <ListItemIcon >
                                <HomeIcon />
                            </ListItemIcon>
                            <Typography variant="h6" color="black"> Home</Typography>
                        </MenuItem>
                        <MenuItem
                            onClick={() => setAnchor(null)}
                            component={Link}
                            to="/Personal"
                        >
                            <ListItemIcon>
                            <BookmarksIcon />
                            </ListItemIcon>
                            <Typography variant="h6" color="black"> Personal </Typography>
                        </MenuItem>
                        <MenuItem
                            onClick={() => setAnchor(null)}
                            component={Link}
                            to="/College"
                        >
                            <ListItemIcon>
                            <SchoolIcon />
                            </ListItemIcon>
                            <Typography variant="h6" color="black"> College </Typography>
                        </MenuItem>
                        <MenuItem
                            onClick={() => setAnchor(null)}
                            component={Link}
                            to="/Skills"
                        >
                            <ListItemIcon>
                            <CodeOutlinedIcon />
                            </ListItemIcon>
                            <Typography variant="h6" color="black"> Skills</Typography>
                        </MenuItem>
                        <MenuItem
                            onClick={() => setAnchor(null)}
                            component={Link}
                            to="/Briefcase"
                        >
                            <ListItemIcon>
                            <BusinessCenterOutlinedIcon />
                            </ListItemIcon>
                            <Typography variant="h6" color="black"> Briefcase</Typography>
                        </MenuItem>
                        <MenuItem
                            onClick={() => setAnchor(null)}
                            component={Link}
                            to="/About"
                        >
                            <ListItemIcon>
                            <ContactPhoneIcon />
                            </ListItemIcon>
                            <Typography variant="h6" color="black"> Contact</Typography>
                        </MenuItem>
                    </Menu>
                </>
                ) : (
                <div style={{ marginRight: "2rem" }}>
                    <Button
                        className={classes.menuButtonDesktop}
                        variant="text"
                        component={Link}
                        to="/"
                    >
                        <HomeIcon style={{ color: 'white' }}/>
                        <Typography variant="text" style={{ color: 'white', marginLeft: '0.2rem' }} > Home </Typography>
                    </Button>
                    <Button
                        className={classes.menuButtonDesktop}
                        variant="text"
                        component={Link}ss
                        to="/Personal"
                        color="white"
                    >
                        <BookmarksIcon style={{ color: 'white' }}/>
                        <Typography variant="text" style={{ color: 'white', marginLeft: '0.2rem' }} > Personal </Typography>
                    </Button>                    
                    <Button
                        className={classes.menuButtonDesktop}
                        variant="text"
                        component={Link}
                        to="/College"
                        color="white"
                    >
                        <SchoolIcon style={{ color: 'white' }}/>
                        <Typography variant="text" style={{ color: 'white', marginLeft: '0.2rem' }} > College </Typography>
                    </Button>
                    <Button
                        className={classes.menuButtonDesktop}
                        variant="text"
                        component={Link}
                        to="/Skills"
                        color="white"
                    >
                        <CodeOutlinedIcon style={{ color: 'white' }}/>
                        <Typography variant="text" style={{ color: 'white', marginLeft: '0.2rem' }} > Skills </Typography>
                    </Button>
                    <Button
                        className={classes.menuButtonDesktop}
                        variant="text"
                        component={Link}
                        to="/Briefcase"
                        color="white"
                    >
                        <BusinessCenterOutlinedIcon style={{ color: 'white' }}/>
                        <Typography variant="text" style={{ color: 'white', marginLeft: '0.2rem' }} > Briefcase </Typography>
                    </Button>
                    <Button
                        variant="text"
                        component={Link}
                        to="/About"
                        color="white"
                    >
                        <ContactPhoneIcon style={{ color: 'white' }}/>
                        <Typography variant="text" style={{ color: 'white', marginLeft: '0.2rem' }} > Contact </Typography>
                    </Button>

                </div>
                )}
            </Toolbar>
            </AppBar>
            <Switch>
            <Route exact path="/">      <Home />     </Route>
            <Route exact path="/Personal">   <Personal /> </Route>
            <Route exact path="/College">    <College />  </Route>
            <Route exact path="/Skills">     <Skills />   </Route>
            <Route exact path="/Briefcase">  <Briefcase/> </Route>
            <Route exact path="/About">      <About />    </Route>
            <Route path="/404">         <NotFoundPage /> </Route>
            <Redirect to="/404" />
            </Switch>
        </BrowserRouter>
        </HideOnScroll>
    </div>
    );
};

export default Header;
