import { Container, Row, Col } from 'react-bootstrap';

const currentYear = new Date().getFullYear();

// Footer component
export default function Footer() {
  return (
    <footer className="w-full bg-light py-5 fixed-bottom">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col md={6}>
            <p className="mb-4 text-muted">
              &copy; {currentYear} <a href="#">Jobfinder</a>. All Rights Reserved.
            </p>
          </Col>
            <Col md={6}>
                <div className="social-media">
                <a href="#" className="twitter">Twitter<i className="bi bi-twitter"></i></a>
                <a href="#" className="facebook">Facebook<i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram">Instagram<i className="bi bi-instagram"></i></a>
                <a href="#" className="linkedin">Linked-In<i className="bi bi-linkedin"></i></a>
                </div>
            </Col>
        </Row>
      </Container>
    </footer>
  );
}
