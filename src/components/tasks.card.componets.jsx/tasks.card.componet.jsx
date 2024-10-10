import './task.style.css'

const Card = ({tasks, dataFromChild, taskName}) => {
    const {id, name, iteration} = tasks
    const onTaskClick = (name) =>{
        dataFromChild(1)
        taskName(name)
    }

    return (
        < div className='task-card' key={id} onClick={() => onTaskClick(name)}>
            <div className='cardTextElements'>
            {/*<img alttext={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />*/}
            <h2 className='taskName'> {name} </h2>
            <p className='counts'> Number of times: {iteration} </p>
            </div>
        </div>
    )
}

export default Card