import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    const date = new Date();
    let hours = date.getHours();
    
    let mins = date.getMinutes();
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let days = weekday[date.getDay()];
    let currentDateandTime = `${hours % 12}:${mins > 10 ? '' : '0'} ${mins} ${hours < 12 ? ' a.m' : ' p.m' } ${day}-${month}-${year} ${days}`;

    const handleChange = (e) => {

        const { name, value } = e.target

        setCurrentDate(currentDateandTime)


        if (name === "taskName") {
            setTaskName(value)
            
        } else {
            setDescription(value)
        }
        
        
    }
   
    
 
    
    const handleSave = (e) => {
        e.preventDefault()

        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["Date"] = currentDate
        save(taskObj)
        setTaskName('')
        setDescription('')
        setCurrentDate('')

       
    }
    
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>

                <div className="form-group">
                    <label>Task Name</label>
                    <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea rows="5" className="form-control" value={description} onChange={handleChange} name="description"></textarea>
                </div>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTaskPopup;