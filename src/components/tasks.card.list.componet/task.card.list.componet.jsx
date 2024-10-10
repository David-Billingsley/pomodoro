import Card from "../tasks.card.componets.jsx/tasks.card.componet";
import './card.style.css'

const Cardlist = ({ tasks, dataFromChild, taskName }) => (
    <div className='taskList'>
        <h2 className='sectionTitle'> Tasks: </h2>
        <p className='lineBreak'/>
        {tasks.map((task) => {
            return <Card tasks={task} dataFromChild={dataFromChild} taskName={taskName}/>
        })}
    </div>
)

export default Cardlist