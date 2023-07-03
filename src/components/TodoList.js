import React, { useState } from 'react';
import CreateTask from '../modals/CreateTask';

export default function TodoList() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [taskList, setTaskList] = useState([]);

    const saveTask = (taskObj) => {
        // console.log('save');
        let tempList = taskList
        tempList.push(taskObj)
        setTaskList(tempList)
        setModal(false)
    }


    return (
        <>
            <div className='header text-center'>
                <h3 className='display-3'>Todo List</h3>
                <button className='btn btn-primary mt-2' onClick={() => setModal(true)} >Create task</button>
            </div>
            <div className='task-container'>
                {taskList.map((obj) => <li>{obj.Name}</li>)}
            </div>
            <CreateTask className='' toggle={toggle} modal={modal} save={saveTask} />
        </>
    )
}
