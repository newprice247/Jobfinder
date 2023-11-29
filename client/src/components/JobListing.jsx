import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

import "bootstrap/dist/css/bootstrap.min.css"

function JobListing(props) {
  return (
    <Accordion defaultActiveKey="1"
    as={Container}
    className='my-1'
    >
      <Accordion.Item eventKey="0" >
        <Accordion.Header >{props.title} / {props.location}</Accordion.Header>
        <Accordion.Body className='bg-dark text-light'>
            <h3>Description:</h3>
            <p>{props.description}</p>
            <h3>Requirements:</h3>
            <p>{props.requirements}</p>
            <h3>Salary and Benefits:</h3>
            <p>{props.salary}</p>
            <p>{props.benefits}</p>
            <h3>Contact:</h3>
            <a href={`mailto:${props.email}`}>{props.email}</a><br />
            <a href={`tel:${props.phone}`}>{props.phone}</a><br />
            <a href={props.website} target='_blank'>{props.website}</a>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default JobListing