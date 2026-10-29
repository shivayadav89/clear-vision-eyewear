import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import ReviewCard from '../components/ReviewCard';
import { products } from '../data/products';

const Home = ({ onAddToCart, onWishlist }) => {
  const featuredProducts = products.slice(0, 6);
  const newArrivals = products.slice(6, 12);

  return (
    <>
      <Hero />
      
      {/* Category Section */}
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
            Find Your Perfect Frame
          </h2>
          <Row className="g-4">
            <Col md={4}>
              <CategoryCard 
                title="Eyeglasses"
                image="/images/singla.png"
                path="/products/eyeglasses"
              />
            </Col>
            <Col md={4}>
              <CategoryCard 
                title="Sunglasses"
                image="/images/new wayfarer junior.png"
                path="/products/sunglasses"
              />
            </Col>
            <Col md={4}>
              <CategoryCard 
                title="Blue Light Glasses"
                image="/images/blueframe.png"
                path="/products/bluelight"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Collection */}
      <section className="py-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h2 
              className="fw-bold mb-0"
              style={{ 
                fontSize: '2.5rem', 
                letterSpacing: '2px',
                color: '#1a1a1a'
              }}
            >
              Featured Eyewear
            </h2>
            <Link to="/products/eyeglasses" className="text-decoration-none">
              <Button variant="outline-dark" className="rounded-pill px-4">
                View All
              </Button>
            </Link>
          </div>
          <Row className="g-4">
            {featuredProducts.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={4}>
                <ProductCard 
                  product={product} 
                  onAddToCart={onAddToCart}
                  onWishlist={onWishlist}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* New Arrivals */}
      <section className="py-5" style={{ backgroundColor: '#fafafa' }}>
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h2 
              className="fw-bold mb-0"
              style={{ 
                fontSize: '2.5rem', 
                letterSpacing: '2px',
                color: '#1a1a1a'
              }}
            >
              New Arrivals
            </h2>
            <Link to="/products/sunglasses" className="text-decoration-none">
              <Button variant="outline-dark" className="rounded-pill px-4">
                View All
              </Button>
            </Link>
          </div>
          <Row className="g-4">
            {newArrivals.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={4}>
                <ProductCard 
                  product={product} 
                  onAddToCart={onAddToCart}
                  onWishlist={onWishlist}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <Container>
          <h2 
            className="text-center fw-bold mb-5"
            style={{ 
              fontSize: '2.5rem', 
              letterSpacing: '2px',
              color: '#1a1a1a'
            }}
          >
            Why Choose Us
          </h2>
          <Row className="g-4">
            {[
              { icon: '★', title: 'Premium Quality', desc: 'Crafted with the finest materials for lasting durability' },
              { icon: '♥', title: 'Comfortable Frames', desc: 'Designed for all-day comfort and perfect fit' },
              { icon: '✦', title: 'Modern Designs', desc: 'Contemporary styles that complement every face' },
              { icon: '↺', title: 'Easy Returns', desc: 'Hassle-free 30-day return policy' }
            ].map((feature, index) => (
              <Col key={index} xs={12} sm={6} md={3}>
                <div 
                  className="text-center p-4"
                  style={{ 
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                  }}
                >
                  <div 
                    className="d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: '#f5f5f5',
                      fontSize: '1.5rem',
                      color: '#1a1a1a'
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: '#1a1a1a' }}>{feature.title}</h5>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>{feature.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Customer Reviews */}
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
            What Our Customers Say
          </h2>
          <Row className="g-4">
            <Col md={4}>
              <ReviewCard 
                name="Sarah Johnson"
                rating={5}
                text="Absolutely love my new glasses! The quality is exceptional and they're so comfortable to wear all day."
                date="2 weeks ago"
              />
            </Col>
            <Col md={4}>
              <ReviewCard 
                name="Michael Chen"
                rating={5}
                text="Best eyewear shopping experience ever. The frames are stylish and the customer service is outstanding."
                date="1 month ago"
              />
            </Col>
            <Col md={4}>
              <ReviewCard 
                name="Emily Davis"
                rating={4}
                text="Great selection of modern designs. Found the perfect pair that matches my style perfectly."
                date="3 weeks ago"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-5">
        <Container>
          <div 
            className="text-center p-5"
            style={{ 
              backgroundColor: '#1a1a1a',
              borderRadius: '8px',
              color: '#fff'
            }}
          >
            <h2 
              className="fw-bold mb-3"
              style={{ 
                fontSize: '2rem', 
                letterSpacing: '2px'
              }}
            >
              Stay in the Frame
            </h2>
            <p 
              className="mb-4"
              style={{ 
                fontSize: '1.1rem',
                opacity: 0.9
              }}
            >
              Get updates about new collections and special offers.
            </p>
            <Form className="d-flex gap-2 justify-content-center flex-wrap" style={{ maxWidth: '500px', margin: '0 auto' }}>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                style={{
                  maxWidth: '300px',
                  borderRadius: '25px',
                  padding: '0.8rem 1.5rem'
                }}
              />
              <Button 
                variant="light"
                type="submit"
                className="rounded-pill px-4"
                style={{ fontWeight: '600' }}
              >
                Subscribe
              </Button>
            </Form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
