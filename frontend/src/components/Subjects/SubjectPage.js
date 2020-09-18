import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import courses from '../Search/CourseList';


export default function SubjectPage(props) {
  let courseRegex = new RegExp(props.location.pathname.slice(-4));
  const relevantCourses = courses.filter(course => course.code.match(courseRegex));
  return (
    <div>
      <h2 className="Section-header">Courses</h2>
      <div className="Subject-list Marginal-container">

        { relevantCourses.map((course, i) => {
            return (
                <Link to={'/course/' + course.code} key={i}>
                  {/*<Card>
                      <CardActionArea>
                          <CardContent>
                              <Typography  variant="body1" component="h2" align='center' paragraph='true'>
                                  {course.code}
                              </Typography>
                          </CardContent>
                      </CardActionArea>
                  </Card>*/}
                  <div className="card" style={{ textAlign: "center", color: "black" }}>
                    <div className="card-body">
                      <h5 className="card-title">{ course.code }: <br/> { course.title }</h5>
                      {/* <h5 className="card-title">{ subject.code }: <br/> { subject.name }</h5> */}
                    </div>
                  </div>
                </Link>
            );
        }) }
      </div>
    </div>
  )
}
