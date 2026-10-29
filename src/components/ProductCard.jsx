import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductCard = ({ product, onAddToCart, onWishlist }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    if (onWishlist) {
      onWishlist(product);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    if (onAddToCart) {
      onAddToCart(product);
    }
    window.location.href = '/checkout';
  };

  return (
    <Card 
      className="h-100 border-0 shadow-sm"
      style={{ 
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: '#fff'
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
      <div style={{ position: 'relative', overflow: 'hidden', height: '250px' }}>
        <Link to={`/product/${product.id}`} className="text-decoration-none">
          <Card.Img 
            variant="top" 
            src={product.image} 
            alt={product.name}
            style={{ 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </Link>
        <Button
          variant="light"
          className="position-absolute top-0 end-0 m-3 rounded-circle"
          style={{ 
            width: '40px', 
            height: '40px', 
            padding: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
          onClick={handleWishlist}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            fill={isWishlisted ? "#e74c3c" : "currentColor"} 
            viewBox="0 0 16 16"
            style={{ transition: 'fill 0.3s ease' }}
          >
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
          </svg>
        </Button>
      </div>
      <Card.Body className="p-4">
        <Link to={`/product/${product.id}`} className="text-decoration-none">
          <Card.Title 
            className="mb-2" 
            style={{ 
              fontSize: '1rem', 
              fontWeight: '600', 
              color: '#1a1a1a',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              cursor: 'pointer'
            }}
          >
            {product.name}
          </Card.Title>
        </Link>
        <div className="d-flex align-items-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#ffc107" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
          <span className="ms-1" style={{ fontSize: '0.85rem', color: '#666' }}>
            {product.rating} ({product.reviews})
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
          <span style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1a1a1a' }}>
            ₹{product.price.toLocaleString()}
          </span>
          <div className="d-flex gap-2">
            <Button
              variant="dark"
              size="sm"
              onClick={handleAddToCart}
              style={{
                borderRadius: '20px',
                padding: '0.4rem 1rem',
                fontSize: '0.85rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Add to Cart
            </Button>
            <Button
              variant="outline-dark"
              size="sm"
              onClick={handleBuyNow}
              style={{
                borderRadius: '20px',
                padding: '0.4rem 1rem',
                fontSize: '0.85rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
