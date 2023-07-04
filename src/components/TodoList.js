import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';
import Navbar from './Navbar';
import OffCanvas from './OffCanvas';
import Footer from './Footer';



export default function TodoList() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const [classNavProp, setClassNavProp] = useState(() => {
        return window.innerWidth < 998 ? 'd-none' : ''
    })
    const [classSideNavProp, setClassSideNavProp] = useState(() => {
        return window.innerWidth > 998 ? 'd-none' : ''
    })





    window.addEventListener('resize', () => {
        if (window.innerWidth > 998) {
            setClassNavProp('')
            setClassSideNavProp('d-none')
        } else {
            setClassNavProp('d-none')
            setClassSideNavProp('')
        }
    });



    useEffect(() => {
        let arr = localStorage.getItem("taskList")

        if (arr) {
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }


    return (
        <>
            <Navbar navClass={classNavProp} />
            <OffCanvas sideNavClass={classSideNavProp} />
            <div className="header text-center">
                <h3 className='display-2'>To-Do App </h3>
                <button className="create-button  btn mt-2" onClick={() => setModal(true)} >Create Task</button>
            </div>
            <div className="task-container">
                {taskList && taskList.map((obj, index) => <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
            <Footer />
        </>
    );
};

