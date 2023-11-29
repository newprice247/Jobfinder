import Accordion from 'react-bootstrap/Accordion';

function JobListing(props) {
  return (
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.title} / {props.location}</Accordion.Header>
        <Accordion.Body>
            <h3>Description:</h3>
            <p>{props.description}</p>
            <h3>Requirements:</h3>
            <p>{props.requirements}</p>
            <h3>Salary and Benefits:</h3>
            <p>$ {props.salary}</p>
            <p>{props.benefits}</p>
            <h3>Contact:</h3>
            <p>{props.email}</p>
            <p>{props.phone}</p>
            <a href={props.website}>{props.website}</a>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default JobListing