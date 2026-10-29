import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="position-relative d-flex align-items-center"
        style={{ 
          height: '40vh',
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
              Contact Us
            </h1>
            <p className="mt-3" style={{ fontSize: '1.2rem', opacity: 0.9 }}>
              We'd love to hear from you
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form and Info */}
      <section className="py-5">
        <Container>
          <Row className="g-5">
            <Col lg={6}>
              <h2 
                className="fw-bold mb-4"
                style={{ 
                  fontSize: '2rem', 
                  letterSpacing: '2px',
                  color: '#1a1a1a'
                }}
              >
                Get in Touch
              </h2>
              <p 
                className="mb-4"
                style={{ 
                  color: '#666', 
                  lineHeight: '1.8'
                }}
              >
                Have a question or feedback? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <div className="mb-4">
                <div className="d-flex align-items-start mb-3">
                  <div 
                    className="d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#f5f5f5',
                      flexShrink: 0
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1a1a1a" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: '#1a1a1a' }}>Visit Our Store</h6>
                    <p style={{ color: '#666', margin: 0 }}>123 Fashion Street, New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-3">
                  <div 
                    className="d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#f5f5f5',
                      flexShrink: 0
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1a1a1a" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.748 1.748 0 0 1-1.657-.459L5.482 8.062a1.748 1.748 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: '#1a1a1a' }}>Call Us</h6>
                    <p style={{ color: '#666', margin: 0 }}>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start mb-3">
                  <div 
                    className="d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#f5f5f5',
                      flexShrink: 0
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1a1a1a" viewBox="0 0 16 16">
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                    </svg>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: '#1a1a1a' }}>Email Us</h6>
                    <p style={{ color: '#666', margin: 0 }}>hello@visiona.com</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-start">
                  <div 
                    className="d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#f5f5f5',
                      flexShrink: 0
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1a1a1a" viewBox="0 0 16 16">
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: '#1a1a1a' }}>Business Hours</h6>
                    <p style={{ color: '#666', margin: 0 }}>Mon - Fri: 9:00 AM - 8:00 PM</p>
                    <p style={{ color: '#666', margin: 0 }}>Sat - Sun: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div 
                className="p-4"
                style={{ 
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}
              >
                <h3 
                  className="fw-bold mb-4"
                  style={{ 
                    fontSize: '1.5rem', 
                    color: '#1a1a1a'
                  }}
                >
                  Send us a Message
                </h3>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: '#1a1a1a', fontWeight: '500' }}>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your name"
                      style={{ borderRadius: '8px', padding: '0.8rem' }}
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: '#1a1a1a', fontWeight: '500' }}>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="your@email.com"
                      style={{ borderRadius: '8px', padding: '0.8rem' }}
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: '#1a1a1a', fontWeight: '500' }}>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      style={{ borderRadius: '8px', padding: '0.8rem' }}
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label style={{ color: '#1a1a1a', fontWeight: '500' }}>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="How can we help you?"
                      style={{ borderRadius: '8px', padding: '0.8rem' }}
                    />
                  </Form.Group>
                  
                  <Button
                    variant="dark"
                    type="submit"
                    size="lg"
                    className="w-100 rounded-pill"
                    style={{
                      letterSpacing: '1px',
                      fontWeight: '600'
                    }}
                  >
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-5" style={{ backgroundColor: '#fafafa' }}>
        <Container>
          <h2 
            className="text-center fw-bold mb-4"
            style={{ 
              fontSize: '2rem', 
              letterSpacing: '2px',
              color: '#1a1a1a'
            }}
          >
            Find Us
          </h2>
          <div 
            className="rounded"
            style={{ 
              height: '400px',
              backgroundColor: '#e0e0e0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#999'
            }}
          >
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16" className="mb-3">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
              <p>Map placeholder - 123 Fashion Street, New York, NY 10001</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
