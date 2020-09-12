import { CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import subjects from './SubjectList';
import Card from '@material-ui/core/Card';
import {Link} from 'react-router-dom';

const listofSubjects = ["ACCT","BABS","CDEV","DATA","ECON","FINS","GBAT","HDAT","IDES","JURD","LAND"];

const SubjectBoxes = ({}) =>(
    <>
    <h2 className="Section-header">Subject Areas</h2>
    <div className="subject-container">

    { subjects.map(function(subject, i){
        return (
            <Link to={'/subject/'+subject.code}>
            <Card style={{width: 275, margin: 20, height: 100}}>
                <CardActionArea>
                    <CardContent>
                        <Typography  variant="body1" component="h2" align='center' paragraph='true'>
                            {subject.code} <br></br>({subject.name})
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Link>
        );
    }) }
    </div>
    </>
)

export default SubjectBoxes;