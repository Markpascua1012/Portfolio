import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 300,
    height: 300,
    
  },
});

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div>
      <Avatar alt="Remy Sharp" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/54419130_2468235979877437_1035186070087532544_n.jpg?_nc_cat=106&_nc_oc=AQnUv1SyQpC1nbbjIM5BsDO5Jujgd92b6ldYU65Xf4frmEDPBipXye1t_aKOJk9AdIJRF_uhle3KOLOSXxsJBVJK&_nc_ht=scontent-lax3-1.xx&oh=ef80a7a118f2a6449b940e5d3dfdf0d9&oe=5DCB8C2A" 
      className={classes.bigAvatar} style={{zIndex:1}} />
    </div>
  );
}