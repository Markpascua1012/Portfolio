import React from "react";
import Card from "./Cards/cards"
import Grid from '@material-ui/core/Grid';
import "./projects.css";


const Projects = () => {
    return (
        <div className="abCont2">
            <Grid container spacing={3}>
            <Grid item xs={4}>
                <Card
                    title="Grocery Pals"
                    subhead="Shopping List Application"
                    image="https://i.imgur.com/HNDaI9c.png" 
                    imagetitle="Grocery Pals"
                    aboutproject="uses blah blah blah"
                    aboutproject2="In this project the user can create an account to keep track of your shopping
                    before going to the store. The user can add and check off items from your list. The user can also 
                    add family members to see their shopping list and help them acquire items."
                    github="https://github.com/grocery-friends/Project-3/tree/merge-three-mark"
                    webpage="https://gpals.herokuapp.com/"/>
            </Grid>
            <Grid item xs={4}>
                <Card 
                    title="AeroSpace Mech"
                    subhead="Airplane Manager"
                    image="https://i.imgur.com/VnayNI7.png" 
                    imagetitle="AeroSpace Mech"
                    aboutproject="uses blah blah blah"
                    aboutproject2="In this project the airpane mechanic can log into his account and manage
                    airplanes based on Make, Model, and Serial Number. The mechanic can then post those planes
                    and see he had posted previously or see what planes other mechanics posted."
                    github="https://github.com/western-aerospace/AeroSpace-Cadets"
                    webpage="https://frozen-spire-59397.herokuapp.com/"/>
            </Grid>
            <Grid item xs={4}>
                <Card               
                    title="Castform Weather"
                    subhead="Pokemon Go Weather Guide"
                    image="https://i.imgur.com/bIKXjmU.png" 
                    imagetitle="Castform Weather"
                    aboutproject="uses blah blah blah"
                    aboutproject2="In this project the user can search by zip code or location to check the weather 
                    and see what types of Pokemon are boosted in your current location."
                    github="https://github.com/pogo-castform/PoGo-Weather"
                    webpage="https://pogo-castform.github.io/PoGo-Weather/"/>
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