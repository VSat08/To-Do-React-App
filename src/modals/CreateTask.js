import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default function CreateTask({ modal, toggle, save }) {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        // Through Destructuing
        // const { name, value } = event.target;


        if (name === "taskName") {
            setTaskName(value)
            
        } else {
            setDescription((value))
        }
    }

    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] =taskName
        taskObj["Description"] = description
        save(taskObj)
    }
    
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input type="text" className="form-control" name='taskName' value={taskName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" rows="5" name='description' value={description} onChange={handleChange} ></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>
                    Create
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}
