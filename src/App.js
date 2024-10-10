import {useState} from "react";
import Cardlist from "./components/tasks.card.list.componet/task.card.list.componet";
import Header from "./components/header.componet/header.componet";
import './App.css'

const App = () => {
    const [tasks, setTasks] = useState([
        {id: 1,
        name: 'Eat Breakfest',
        iteration: 0},
        {
            id:2,
            name: 'Move the Dishes',
        iteration: 2
        },
        {
            id:3,
            name: 'Write SOP',
        iteration: 1
        },
        {
            id:4,
            name: 'Do Homework',
        iteration: 5
        }
    ])

    const [dataFromChild, setDataFromChild] = useState(0)
    const [taskname, setTaskName] = useState('')

    return (
        <div className="App">
            <Header />
            {dataFromChild === 0 ? '' : <p className='taskInfoDisplay'>{taskname}: <br/> Notes: <br/> Take the dishes from the diswasher and put them in the drying rack and refill it</p>}
            <Cardlist tasks={tasks} dataFromChild={setDataFromChild} taskName={setTaskName}/>
        </div>
    );
}

export default App;
