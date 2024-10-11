import {useState} from "react";
import Cardlist from "./components/tasks.card.list.componet/task.card.list.componet";
import Header from "./components/header.componet/header.componet";
import './App.css'

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'Eat Breakfest',
            iteration: 0,
            notes: "Cook 3 ages and eat it"
        },
        {
            id: 2,
            name: 'Move the Dishes',
            iteration: 2,
            notes: "Put the dishes in the dishwasher away and refill it"
        },
        {
            id: 3,
            name: 'Write SOP',
            iteration: 1,
            notes: "Instruction manual on making a bike"
        },
        {
            id: 4,
            name: 'Do Homework',
            iteration: 5,
            notes: " Do chapters 1 threw 3."
        }
    ])

    const [dataFromChild, setDataFromChild] = useState(0)
    const [taskname, setTaskName] = useState('')

    const notesList = tasks.filter((tasks) => {
        return String(tasks.name).includes(taskname)
    })


    return (
        <div className="App">
            <Header/>
            {dataFromChild === 0 ? '' :
                <p className='taskInfoDisplay'><u>{taskname} </u> <br/> Notes: <br/> {notesList.map((note) =>{
                    const {notes} = note
                    return (<p>{notes} </p>)})}</p>}
            <Cardlist tasks={tasks} dataFromChild={setDataFromChild} taskName={setTaskName}/>
        </div>
    );
}

export default App;
