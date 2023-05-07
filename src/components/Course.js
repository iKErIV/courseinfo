const Total = ({ parts }) => {
    const total = parts.reduce((previousNum, currentNum) => {
      return previousNum + currentNum.exercises
    }, 0);
  
    return (
      <>
        <p>
          <strong>
            total of {total} exercises
          </strong>
        </p>
      </>
    );
}
  
const Part = ({ part }) => {
    return (
      <>
        <p>
          {part.name} {part.exercises}
        </p>
      </>
    )
}
  
const Header = ({ name }) => {
    return (
      <>
        <h2>{name}</h2>
      </>
    );
}
  
const Content = ({ parts }) => {
    return (
      <>
        {parts.map(part => 
          <Part key={part.id} part={part} />  
        )}
      </>
    );
}
  
const Course = ({ course }) => {
    return (
      <>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    )
}

export default Course;