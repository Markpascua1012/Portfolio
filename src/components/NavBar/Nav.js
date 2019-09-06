import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

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
        background: "white",
        color: "#1a1d24;"
        

    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Button color="inherit"> 
                        Mark Pascua  &nbsp; <KeyboardArrowUpIcon />
                    </Button>
                    |
                    <Button color="inherit"> <AccountCircleIcon /> &nbsp;
                        About Me
                    </Button>
                    |
                    <Button color="inherit"> <AssignmentIcon /> &nbsp;
                        Projects
                    </Button>
                    |
                    <Button color="inherit"><ContactMailIcon /> &nbsp;
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}