import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';
import Navbar from './Navbar';
import OffCanvas from './OffCanvas';
import Footer from './Footer';
import EmptyWorkspace from './emptyWorkspace';


export default function TodoList() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const [classNavProp, setClassNavProp] = useState(() => {
        return window.innerWidth < 768 ? 'd-none' : ''
    })
    const [classSideNavProp, setClassSideNavProp] = useState(() => {
        return window.innerWidth > 768 ? 'd-none' : ''
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
    // const themeList =[
    //     {
    //         "themeName": "OrangeFun",
    //         "bgColor1": "#fc4a1a",
    //         "bgColor2": "#f7b733",
    //         "textColor": "#000",
            
    //     },
    //     {
    //         "themeName": "DeepSpace",
    //         "bgColor1": "#000000",
    //         "bgColor2": "#434343",
    //         "textColor": "#fff",
            
    //     },
    //     {
    //         "themeName": "Lawrencium",
    //         "bgColor1": "#0f0c29",
    //         "bgColor2": "#302b63",
    //         "textColor": "#fff",
            
    //     },
    //     {
    //         "themeName": "Frost",
    //         "bgColor1": "#000428",
    //         "bgColor2": "#004e92",
    //         "textColor": "#fff",
            
    //     }
    // ]

    return (
        <>
            <Navbar navClass={classNavProp} />
            <OffCanvas sideNavClass={classSideNavProp} />
            <div className="header text-center">
                <h3 className='display-2'>To-Do App </h3>
                <p className='lead text-light m-1'>Create and stay Organized!! </p>
                <p className='lead text-light m-1'>Unleash Your Productivity: Your Ultimate To-Do List App!</p>
                <button className="create-button  btn mt-2 px-5 py-2" onClick={() => setModal(true)} >Create Task</button>
            </div>
            <div className="task-container">
                
                {/* {taskList && taskList.map((obj, index) => <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)
                } */}
                {taskList.length > 0 ? taskList && taskList.map((obj, index) => <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />) : <EmptyWorkspace />}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
            <Footer />
        </>
    );
};

