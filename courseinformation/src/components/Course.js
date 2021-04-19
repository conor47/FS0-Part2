import React from 'react';

const Course = ({course}) => {
    return (  
      <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      </div>
    )
  }

  const Header = ({ course }) => {
    return (
      <h2>{course.name}</h2>
    )
  }
  
  const Total = ({ course }) => {
    let sum = course.parts.reduce((acc,cur) => {
      if(cur.name){
        acc += cur.exercises;
      }
      return acc;
    },0)
    return(
      <h3>Number of exercises {sum}</h3>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => 
          <Part part={part} key={part.id}/>)}
      </div>
    )
  }
 
  export default Course