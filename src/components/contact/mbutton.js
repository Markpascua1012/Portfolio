import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        width: "100%",
        backgroundColor: "#1a1d24"
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
}));

export default function IconLabelButtons() {
    const classes = useStyles();

    return (
        <div>
            <Button variant="contained" type="submit" color="primary" className={classes.button}>
            Send &nbsp; <i class="far fa-paper-plane"></i>
            </Button>
        </div>
    );
}