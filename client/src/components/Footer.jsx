import { Container, Row, Col } from 'react-bootstrap';

const currentYear = new Date().getFullYear();

// Footer component
export default function Footer() {
  return (
    <footer className="w-full bg-dark fixed-bottom">
      <Container>
        <Row className="justify-content-center align-items-center text-center py-3">
          <Col md={6}>
             
             <a href="#" className="text-light"> &copy; {currentYear} Jobfinder. All Rights Reserved.</a>
             
          </Col>
            <Col md={6}>
                <div className="social-media">
                <a href="#" className="twitter mx-3">Twitter<i className="bi bi-twitter"></i></a>
                <a href="#" className="facebook mx-3">Facebook<i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram mx-3">Instagram<i className="bi bi-instagram"></i></a>
                <a href="#" className="linkedin mx-3">Linked-In<i className="bi bi-linkedin"></i></a>
                </div>
            </Col>
        </Row>
      </Container>
    </footer>
  );
}
