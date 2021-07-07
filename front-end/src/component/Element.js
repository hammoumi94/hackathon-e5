/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper, Typography, Button,
} from '@material-ui/core';

import reponseService from '../services/reponse';

const useStyle = makeStyles(theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: "60%",
 
    margin: "0 auto"
  }),
  button:{
    pointerEvents: "none",
    boxShadow: "none"
  },
  questionMeta:{
    marginLeft: 10,
    display: "inline"
  },
  footer:{
    marginTop: "40px"
  },
  buttonGroup:{
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

export default function Element(props) {
  const { question, score, handleScoreChange }=props; //setScore(score+1)
  const [reponses, setReponses] = useState([]);

  const handleClick = (reponse) => {
    if(reponse.correcte===1){
      handleScoreChange(score+1)
    }
  };
  const classes = useStyle();
  useEffect(async () => {
    const reponsesFromApi = await reponseService.list();
    setReponses(reponsesFromApi.filter((reponse)=>reponse.idQuestion===question.id));
  }, []);

  return (
         <Paper className={classes.root} elevation={4}>
           <Typography component="p">
          <Button color="primary" aria-label="add" className={classes.button}>
            {'icon'}
           </Button>
          {`Question #${question.id}`}
        <Typography variant="headline" component="h5">
          {question.contenu}
        </Typography>
        <div className={classes.buttonGroup}>
        {
          reponses.map((reponse)=>{
            return <Button variant="contained" color="primary" onClick={()=>{handleClick(reponse)}}>
            {reponse.contenu}</Button>
          }
          )
        }
        </div>
        </Typography>
        </Paper>
  );
}
