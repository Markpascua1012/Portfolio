import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "./Nav.css";
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        background: "black",
        color: "white",
        position: "fixed",
        top: 0,
        width: "100%",

    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className="navCont">
        <div className={classes.root}>
            <AppBar className={classes.appBar} style={{zIndex:100}}>
                <Toolbar>
                    <Button color="inherit" href="#HOME"> 
                        Mark Pascua  &nbsp; <KeyboardArrowUpIcon />
                    </Button>
                    |
                    <Button color="inherit" href="#ABOUTME"> <AccountCircleIcon /> &nbsp;
                        About Me
                    </Button>
                    |
                    <Button color="inherit" href="#PROJECTS"> <AssignmentIcon /> &nbsp;
                        Projects
                    </Button>
                    |
                    <Button color="inherit" href="#CONTACT"><ContactMailIcon /> &nbsp;
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    </div>
    );
}