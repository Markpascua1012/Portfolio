import React from "react";
import Card from "../Cards/cards"
import Grid from '@material-ui/core/Grid';
import "./projects.css";


const Projects = () => {
    return (
        <div className="abCont2">
            <Grid container spacing={3}>
            <Grid item xs={4}>
                <Card />
            </Grid>
            <Grid item xs={4}>
                <Card />
            </Grid>
            <Grid item xs={4}>
                <Card />
            </Grid>
            </Grid>
            <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        </div>

    )
}

export default Projects;