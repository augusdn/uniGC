import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import subjects from './SubjectList';


const SubjectBoxes = ({}) => (
    <div>
      <h2 className="Section-header">Subject Areas</h2>
      <div className="Subject-list Marginal-container">

        { subjects.map((subject, i) => {
            return (
                <Link to={'/subject/' + subject.code} key={i}>
                  {/*<Card>
                      <CardActionArea>
                          <CardContent>
                              <Typography  variant="body1" component="h2" align='center' paragraph='true'>
                                  {subject.code} <br></br>({subject.name})
                              </Typography>
                          </CardContent>
                      </CardActionArea>
                  </Card>*/}
                  <div className="card" style={{ textAlign: "center", color: "black" }}>
                    <div className="card-body">
                      <h5 className="card-title">{ subject.code }: <br/> { subject.name }</h5>
                    </div>
                  </div>
                </Link>
            );
        }) }
      </div>
    </div>
)

export default SubjectBoxes;
