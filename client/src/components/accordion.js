import Accordion from "react-bootstrap/Accordion";
import React from "react";

function MyAccordion() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Christopher Morales</Accordion.Header>
                <Accordion.Body>
                Program Coordinator, BackEnd
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Carlos Hernandez</Accordion.Header>
                <Accordion.Body>
                    FrontEnd Programming 
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Samuel Kraus</Accordion.Header>
                <Accordion.Body>
                BackEnd Programmer
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Lucia Sotelo</Accordion.Header>
                <Accordion.Body>
                FrontEnd Programmer
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>William Torres</Accordion.Header>
                <Accordion.Body>
                BackEnd
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default MyAccordion;
