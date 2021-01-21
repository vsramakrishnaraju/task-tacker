import Header from './components/Header';
import React from 'react'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 3:30pm",
      reminder: false,
    },
    {
      id: 4,
      text: "Jogging ",
      day: "Jan 18th at 6:00pm",
      reminder: true,
    },
  ]);

//toggle delete
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !==id))
}

//toggle reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? { ...task, reminder: !task.reminder } :  task))
}


  return (
    <div className="container">
     <Header />
     <AddTask />
     {tasks.length > 0 ? 
     (<Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No tasks To Show')}
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1> hello </h1>
//   }
// }

export default App;
