import { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
import { Button, Offcanvas } from 'react-bootstrap';
// import  from 'react-bootstrap/Offcanvas';
import { UncontrolledAccordion, AccordionBody, AccordionItem, AccordionHeader } from 'reactstrap'
import SocialIcons from './socialIcons';

function OffCanvas({ sideNavClass }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={`${sideNavClass}`}>
            <Button variant="light" className="d-lg-none mt-3 ms-3" onClick={handleShow}>
                <i className="fa-solid fa-bars" style={{"cursor": "pointer" }}></i>
            </Button>

           

            <Offcanvas show={show} onHide={handleClose} responsive="xl">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                       
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <h2 className='display-2'>
                        To Do App
                    </h2>
                    <p className="mb-0">
                        This is content within an <code>.offcanvas-lg</code>.
                    </p>
                    <UncontrolledAccordion stayOpen className='mt-5'>
                        <AccordionItem>
                            <AccordionHeader targetId="1">
                                Accordion Item 1
                            </AccordionHeader>
                            <AccordionBody accordionId="1">
                                <strong>
                                    This is the first item's accordion body.
                                </strong>
                                You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                                <code>
                                    .accordion-body
                                </code>
                                , though the transition does limit overflow.
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="2">
                                Accordion Item 2
                            </AccordionHeader>
                            <AccordionBody accordionId="2">
                                <strong>
                                    This is the second item's accordion body.
                                </strong>
                                You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                                <code>
                                    .accordion-body
                                </code>
                                , though the transition does limit overflow.
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="3">
                                Accordion Item 3
                            </AccordionHeader>
                            <AccordionBody accordionId="3">
                                <strong>
                                    This is the third item's accordion body.
                                </strong>
                                You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                                <code>
                                    .accordion-body
                                </code>
                                , though the transition does limit overflow.
                            </AccordionBody>
                        </AccordionItem>
                    </UncontrolledAccordion>

                    
                    
                </Offcanvas.Body>
                <div className="accordianFooter pb-5 mx-auto">
                    <SocialIcons />
                </div>
            </Offcanvas>
        </div>
    );
}

export default OffCanvas;