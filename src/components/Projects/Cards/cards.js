import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import "../projects.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/54419130_2468235979877437_1035186070087532544_n.jpg?_nc_cat=106&_nc_oc=AQnUv1SyQpC1nbbjIM5BsDO5Jujgd92b6ldYU65Xf4frmEDPBipXye1t_aKOJk9AdIJRF_uhle3KOLOSXxsJBVJK&_nc_ht=scontent-lax3-1.xx&oh=ef80a7a118f2a6449b940e5d3dfdf0d9&oe=5DCB8C2A" >
            R
          </Avatar>
        }
        // action={
          // <IconButton href={props.webpage} aria-label="settings">
          //  <i class="fas fa-eye"></i>
          // </IconButton>
        // }
        title={props.title}
        subheader={props.subhead}
      />
      <CardMedia
        className={classes.media}
        image={props.image} 
        title={props.imagetitle}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.aboutproject}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton href={props.github} aria-label="to Github">
        <i class="fab fa-github"></i>
        </IconButton>
        <IconButton href={props.webpage} aria-label="share">
        <i class="fas fa-file"></i>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <h4>What it Does</h4>
            <p>{props.aboutproject2}</p>
            <hr className="cardhr"></hr>
            <h4>What it Uses</h4>
            <p>{props.uses}</p>
            <hr className="cardhr"></hr>
            <h4>Team Members</h4>
            <p>{props.team}</p>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}