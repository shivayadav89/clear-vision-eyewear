import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      className="position-relative d-flex align-items-center"
      style={{ 
        height: '90vh',
        backgroundImage: 'url("/images/background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#f5f5f5'
      }}
    >
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      ></div>
      <Container className="position-relative" style={{ zIndex: 1 }}>
        <div 
          className="text-center"
          style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            animation: 'fadeInUp 1s ease-out'
          }}
        >
          <h1 
            className="fw-bold mb-4"
            style={{ 
              fontSize: '4rem', 
              letterSpacing: '4px',
              color: '#fff',
              lineHeight: '1.2'
            }}
          >
            SEE THE WORLD DIFFERENTLY
          </h1>
          <p 
            className="mb-5"
            style={{ 
              fontSize: '1.3rem', 
              color: '#fff',
              lineHeight: '1.8',
              fontWeight: '400'
            }}
          >
            Discover eyewear designed for your style, comfort and everyday confidence.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/products/eyeglasses">
              <Button 
                variant="light"
                size="lg"
                className="px-5 py-3 rounded-pill"
                style={{
                  letterSpacing: '1px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Shop Eyeglasses
              </Button>
            </Link>
            <Link to="/products/sunglasses">
              <Button 
                variant="outline-light"
                size="lg"
                className="px-5 py-3 rounded-pill"
                style={{
                  letterSpacing: '1px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.color = '#1a1a1a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#fff';
                }}
              >
                Explore Sunglasses
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
