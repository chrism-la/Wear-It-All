import Accordion from "react-bootstrap/Accordion";
import React from "react";

function MyAccordion() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header >Christopher Morales</Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "#c6d2cf"}}>
                    Program Coordinator, BackEnd Programmer: Introducing our
                    Project Coordinator, an orchestrator of seamless
                    collaboration and efficiency. In the role of a coordinator,
                    they harmonized team efforts, ensuring a synchronized
                    workflow towards success. Central to our triumph is their
                    expertise in managing the critical Server to Database
                    Connection. They crafted a robust connection, guaranteeing a
                    fluid data flow that forms the bedrock of our application.
                    Their strategic approach to this connection not only ensures
                    reliability but also lays the groundwork for scalability.
                    With precision and dedication, our Project Coordinator
                    navigates the complexities of server-database dynamics,
                    shaping a technological synergy that propels our project to
                    new heights.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Carlos Hernandez</Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "#c6d2cf"}}>
                    FrontEnd Programming: Meet Carlos Hernandez, our dynamic
                    Front End Developer, steering innovation with unparalleled
                    coding finesse. A React maestro, Carlos crafts responsive UI
                    components, delving into the intricacies of debugging with
                    precision, ensuring a flawless user experience. His
                    expertise extends to leveraging React Bootstrap, seamlessly
                    weaving aesthetic designs into intuitive user interfaces.
                    Carlos thrives on troubleshooting, addressing code errors,
                    and enhancing overall functionality. In the realm of UX/UI,
                    he not only sculpts attractive designs but ensures
                    accessibility and user satisfaction. Carlos's dedication to
                    seamless navigation is evident in his mastery of client-side
                    routing with react-router-dom. Join us in celebrating
                    Carlos—a code artisan shaping a future of digital excellence
                    in every line.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Samuel Kraus</Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "#c6d2cf"}}>
                    BackEnd Programmer: Introducing Samuel Kraus, the architect
                    behind our dynamic user experience. Samuel specializes in
                    crafting Express routes and functionality, the vital
                    pathways that breathe life into our applications. With an
                    intricate understanding of these routes, he ensures our app
                    performs specific actions seamlessly, delivering a dynamic
                    and responsive user experience. Samuel's expertise lies in
                    the art of structuring these routes, creating a robust
                    framework that underlines the core functionality of our
                    applications. Join us in acknowledging Samuel Kraus, where
                    coding expertise meets a commitment to delivering an
                    unparalleled and responsive journey for our users.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Lucia Sotelo</Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "#c6d2cf"}}>
                    FrontEnd Programmer: Meet Lucia Sotelo, the creative mind
                    behind our Front End and UX/UI magic. A React maestro, Lucia
                    ensures our applications are not just functional but
                    beautifully responsive. As a User Experience Specialist, she
                    crafts intuitive designs and provides valuable UI
                    improvement suggestions. Lucia also doubles as our
                    Documentation Specialist, maintaining clear project
                    documentation. In collaborative stand-ups and code reviews,
                    she adds her touch of excellence. Lucia's commitment extends
                    to Git workflows, ensuring seamless integration. Join us in
                    celebrating Lucia, where innovation, code, and user
                    experience converge seamlessly.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>William Torres</Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "#c6d2cf"}}>
                    BackEnd Programmer: Meet William Torres, our meticulous
                    project architect dedicated to clarity and precision.
                    William emphasizes the importance of a well-crafted Readme,
                    serving as a beacon for others to understand our project
                    intricacies. With unwavering focus, he prioritizes
                    functionality, ensuring our app's features are not only
                    well-documented but also intuitively designed. William
                    believes in the power of structured planning, where a
                    comprehensive Readme serves as a roadmap for developers. By
                    championing a clear understanding of project functionality,
                    he ensures our team and others embark on a development
                    journey with purpose and a shared vision for success.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Christopher DiStasio</Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "#c6d2cf"}}>
                    Milestone II Instructor: Meet Christopher DiStasio, our invaluable instructor—a guiding force in the intricate world of deployment and troubleshooting. With unwavering dedication, Christopher serves as a beacon of support, always ready to lend a helping hand to his students. His wealth of knowledge transforms challenges into learning opportunities, making the complex realm of deployment more accessible. Christopher's commitment to student success goes beyond the curriculum; he invests time, ensuring every learner thrives. In the journey of technology, Christopher stands as a pillar of guidance, making the learning experience richer, and troubleshooting hurdles surmountable for all.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default MyAccordion;
