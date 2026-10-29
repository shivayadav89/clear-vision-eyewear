import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { products } from '../data/products';

const ProductDetails = ({ onAddToCart, onWishlist }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h2>Product not found</h2>
        <Link to="/products/eyeglasses">
          <Button variant="dark" className="mt-3">Back to Products</Button>
        </Link>
      </Container>
    );
  }

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
  };

  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    navigate('/checkout');
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    if (onWishlist) {
      onWishlist(product);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill={i < Math.floor(rating) ? "#ffc107" : "#e0e0e0"}
        viewBox="0 0 16 16"
      >
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>
    ));
  };

  return (
    <Container className="py-5">
      <Link to="/products/eyeglasses" className="text-decoration-none mb-4 d-inline-block" style={{ color: '#666' }}>
        ← Back to Products
      </Link>
      
      <Row className="g-5">
        <Col lg={6} md={6}>
          <div 
            className="position-relative"
            style={{ 
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#f5f5f5'
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
        </Col>
        
        <Col lg={6} md={6}>
          <h1 
            className="fw-bold mb-3"
            style={{ 
              fontSize: '2.5rem', 
              color: '#1a1a1a',
              lineHeight: '1.2'
            }}
          >
            {product.name}
          </h1>
          
          <div className="d-flex align-items-center mb-3">
            {renderStars(product.rating)}
            <span className="ms-2" style={{ color: '#666' }}>
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
          
          <h2 
            className="fw-bold mb-4"
            style={{ 
              fontSize: '2rem', 
              color: '#1a1a1a'
            }}
          >
            ₹{product.price.toLocaleString()}
          </h2>
          
          <p 
            className="mb-4"
            style={{ 
              color: '#666', 
              lineHeight: '1.8',
              fontSize: '1.05rem'
            }}
          >
            {product.description}
          </p>
          
          <div className="mb-4">
            <Row className="g-3">
              <Col sm={6}>
                <div style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
                  <small style={{ color: '#999', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>Material</small>
                  <p className="mb-0 fw-semibold" style={{ color: '#1a1a1a' }}>{product.material}</p>
                </div>
              </Col>
              <Col sm={6}>
                <div style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
                  <small style={{ color: '#999', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>Shape</small>
                  <p className="mb-0 fw-semibold" style={{ color: '#1a1a1a' }}>{product.shape}</p>
                </div>
              </Col>
              <Col sm={6}>
                <div style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
                  <small style={{ color: '#999', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>Color</small>
                  <p className="mb-0 fw-semibold" style={{ color: '#1a1a1a' }}>{product.color}</p>
                </div>
              </Col>
              <Col sm={6}>
                <div style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
                  <small style={{ color: '#999', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>Size</small>
                  <p className="mb-0 fw-semibold" style={{ color: '#1a1a1a' }}>{product.size}</p>
                </div>
              </Col>
            </Row>
          </div>
          
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="d-flex align-items-center border rounded" style={{ borderColor: '#ddd' }}>
              <Button
                variant="light"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity === 1}
                style={{ border: 'none', borderRadius: '0' }}
              >
                -
              </Button>
              <span 
                className="px-3 py-2"
                style={{ minWidth: '50px', textAlign: 'center', fontWeight: '600' }}
              >
                {quantity}
              </span>
              <Button
                variant="light"
                onClick={() => handleQuantityChange(1)}
                disabled={quantity === 10}
                style={{ border: 'none', borderRadius: '0' }}
              >
                +
              </Button>
            </div>
          </div>
          
          <div className="d-flex gap-3 flex-wrap">
            <Button
              variant="dark"
              size="lg"
              className="flex-grow-1 rounded-pill"
              onClick={handleAddToCart}
              style={{
                letterSpacing: '1px',
                fontWeight: '600'
              }}
            >
              Add to Cart
            </Button>
            <Button
              variant="outline-dark"
              size="lg"
              className="rounded-pill px-4"
              onClick={handleBuyNow}
              style={{
                letterSpacing: '1px',
                fontWeight: '600'
              }}
            >
              Buy Now
            </Button>
            <Button
              variant="outline-dark"
              size="lg"
              className="rounded-pill px-4"
              onClick={handleWishlist}
              style={{
                letterSpacing: '1px',
                fontWeight: '600'
              }}
            >
              {isWishlisted ? '♥ Wishlisted' : '♡ Wishlist'}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
