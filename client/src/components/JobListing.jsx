import Accordion from 'react-bootstrap/Accordion';

function JobListing(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.title}/{props.location}</Accordion.Header>
        <Accordion.Body>
            <p>{props.description}</p>
            <p>{props.requirements}</p>
            <p>{props.salary}</p>
            <p>{props.benefits}</p>
            <p>{props.contact}</p>
            <p>{props.website}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default JobListing