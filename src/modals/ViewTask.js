import React from 'react'
import { Button,Modal } from 'react-bootstrap'

function ViewTask({ show,taskObj, onHide }) {
    return (
        <Modal show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={onHide}>
                <Modal.Title id="contained-modal-title-vcenter">
                    {taskObj.Name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='lead' style={{
                    'overflowX': 'hidden',
                    'display': 'flex', 'flexWrap': 'wrap',
                    
                }}>
                    {taskObj.Description}
               </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ViewTask


    // < Modal isOpen = { viewmodal } toggle = { viewmodaltoggle } fullscreen >
    //         <ModalHeader toggle={viewmodaltoggle}>{JSON.stringify(taskObj.Name)}</ModalHeader>
    //         <ModalBody>
    //             {taskObj.Description }
    //         </ModalBody>
    //         <ModalFooter>
    //             <Button color="secondary" onClick={viewmodaltoggle}>Cancel</Button>
    //         </ModalFooter>
    //     </ >