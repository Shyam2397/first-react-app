import logo from './logo.svg';
import './App.css';

function App() {


  // Students data 


  const studentsData = [
    {name:'sanjay',
    batch:'b47',
    edu:'be'
    },
    {name:'sanjay',
    batch:'b47',
    edu:'BE'
    },
    {name:'sanjay',
    batch:'b47',
    edu:'be'
    },
    {name:'sanjay',
    batch:'b47',
    edu:'BE'
    }
  ]
  return (
    <div className="App">
      <div className='card-block'>
        {studentsData.map((stud,ind)=>(
          <StudentCard
          key={ind}
          name={stud.name}
          batch={stud.batch}
          education={stud.edu}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

function StudentCard(props){
  return(
    <div className="student-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_J4IeylQzW8W_6kSUF9c7seuRg757hfjyhejz6QFv&s"/>
      <h3>{props.name}</h3>
      <p>{props.batch}</p>
      <p>{props.education}</p>
    </div>
  )
}