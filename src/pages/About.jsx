import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="position-relative d-flex align-items-center"
        style={{ 
          height: '50vh',
          backgroundImage: 'url("/images/background.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1a1a1a'
        }}
      >
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        ></div>
        <Container className="position-relative" style={{ zIndex: 1 }}>
          <div className="text-center text-white">
            <h1 
              className="fw-bold"
              style={{ 
                fontSize: '3.5rem', 
                letterSpacing: '3px'
              }}
            >
              About VISIONA
            </h1>
          </div>
        </Container>
      </section>

      {/* Brand Story */}
      <section className="py-5">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6}>
              <h2 
                className="fw-bold mb-4"
                style={{ 
                  fontSize: '2.5rem', 
                  letterSpacing: '2px',
                  color: '#1a1a1a'
                }}
              >
                Our Story
              </h2>
              <p 
                className="mb-4"
                style={{ 
                  color: '#666', 
                  lineHeight: '1.9',
                  fontSize: '1.05rem'
                }}
              >
                Founded in 2020, VISIONA was born from a simple belief: everyone deserves eyewear that combines exceptional quality with timeless design. What started as a small workshop has grown into a brand trusted by thousands who appreciate the finer details in life.
              </p>
              <p 
                className="mb-4"
                style={{ 
                  color: '#666', 
                  lineHeight: '1.9',
                  fontSize: '1.05rem'
                }}
              >
                Our journey began with a commitment to craft eyewear that doesn't just correct vision—it enhances it. Every frame we create tells a story of dedication, precision, and an unwavering passion for excellence.
              </p>
            </Col>
            <Col lg={6}>
              <img
                src="/images/singla.png"
                alt="Our Workshop"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-5" style={{ backgroundColor: '#fafafa' }}>
        <Container>
          <h2 
            className="text-center fw-bold mb-5"
            style={{ 
              fontSize: '2.5rem', 
              letterSpacing: '2px',
              color: '#1a1a1a'
            }}
          >
            Our Mission
          </h2>
          <Row className="g-4">
            <Col md={4}>
              <div className="text-center p-4">
                <div 
                  className="d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    backgroundColor: '#1a1a1a',
                    color: '#fff',
                    fontSize: '2rem'
                  }}
                >
                  ✓
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#1a1a1a' }}>Quality First</h4>
                <p style={{ color: '#666', lineHeight: '1.8' }}>
                  We source the finest materials and employ skilled artisans to ensure every pair meets our exacting standards.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4">
                <div 
                  className="d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    backgroundColor: '#1a1a1a',
                    color: '#fff',
                    fontSize: '2rem'
                  }}
                >
                  ♥
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#1a1a1a' }}>Customer Focus</h4>
                <p style={{ color: '#666', lineHeight: '1.8' }}>
                  Your satisfaction is our priority. We're committed to providing exceptional service and support at every step.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4">
                <div 
                  className="d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    backgroundColor: '#1a1a1a',
                    color: '#fff',
                    fontSize: '2rem'
                  }}
                >
                  ✦
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#1a1a1a' }}>Innovation</h4>
                <p style={{ color: '#666', lineHeight: '1.8' }}>
                  We continuously evolve our designs and technologies to bring you the latest in eyewear innovation.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Design Philosophy */}
      <section className="py-5">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6} className="order-lg-2">
              <h2 
                className="fw-bold mb-4"
                style={{ 
                  fontSize: '2.5rem', 
                  letterSpacing: '2px',
                  color: '#1a1a1a'
                }}
              >
                Design Philosophy
              </h2>
              <p 
                className="mb-4"
                style={{ 
                  color: '#666', 
                  lineHeight: '1.9',
                  fontSize: '1.05rem'
                }}
              >
                At VISIONA, we believe that less is more. Our design philosophy centers on minimalism, elegance, and functionality. Every curve, every angle, every material choice is intentional.
              </p>
              <p 
                className="mb-4"
                style={{ 
                  color: '#666', 
                  lineHeight: '1.9',
                  fontSize: '1.05rem'
                }}
              >
                We draw inspiration from modern architecture, nature's perfect forms, and the timeless elegance of classic design. The result is eyewear that feels both contemporary and enduring.
              </p>
            </Col>
            <Col lg={6} className="order-lg-1">
              <img
                src="/images/blueframe.png"
                alt="Design Process"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values */}
      <section className="py-5" style={{ backgroundColor: '#1a1a1a', color: '#fff' }}>
        <Container>
          <h2 
            className="text-center fw-bold mb-5"
            style={{ 
              fontSize: '2.5rem', 
              letterSpacing: '2px'
            }}
          >
            Our Values
          </h2>
          <Row className="g-4">
            <Col md={3}>
              <div className="text-center">
                <h3 className="fw-bold mb-2" style={{ fontSize: '3rem' }}>12+</h3>
                <p style={{ opacity: 0.8 }}>Years of Experience</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <h3 className="fw-bold mb-2" style={{ fontSize: '3rem' }}>50K+</h3>
                <p style={{ opacity: 0.8 }}>Happy Customers</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <h3 className="fw-bold mb-2" style={{ fontSize: '3rem' }}>100+</h3>
                <p style={{ opacity: 0.8 }}>Unique Designs</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <h3 className="fw-bold mb-2" style={{ fontSize: '3rem' }}>30</h3>
                <p style={{ opacity: 0.8 }}>Day Returns</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
