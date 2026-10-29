import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products = ({ onAddToCart, onWishlist }) => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  useEffect(() => {
    let filtered = category 
      ? products.filter(p => p.category === category)
      : products;

    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popularity') {
      filtered.sort((a, b) => b.popularity - a.popularity);
    }

    setFilteredProducts(filtered);
  }, [category, searchTerm, priceRange, sortBy]);

  const getCategoryTitle = () => {
    const titles = {
      eyeglasses: 'Eyeglasses',
      sunglasses: 'Sunglasses',
      bluelight: 'Blue Light Glasses'
    };
    return titles[category] || 'All Products';
  };

  return (
    <Container className="py-5">
      <h1 
        className="fw-bold mb-4"
        style={{ 
          fontSize: '2.5rem', 
          letterSpacing: '2px',
          color: '#1a1a1a'
        }}
      >
        {getCategoryTitle()}
      </h1>

      <Row className="g-4 mb-4">
        <Col lg={3} md={4} sm={6}>
          <Form.Control
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ borderRadius: '8px' }}
          />
        </Col>
        <Col lg={3} md={4} sm={6}>
          <Form.Select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            style={{ borderRadius: '8px' }}
          >
            <option value="all">All Prices</option>
            <option value="0-10000">Under ₹10,000</option>
            <option value="10000-15000">₹10,000 - ₹15,000</option>
            <option value="15000-20000">₹15,000 - ₹20,000</option>
            <option value="20000-50000">₹20,000+</option>
          </Form.Select>
        </Col>
        <Col lg={3} md={4} sm={6}>
          <Form.Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{ borderRadius: '8px' }}
          >
            <option value="popularity">Sort by Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </Form.Select>
        </Col>
        <Col lg={3} md={4} sm={6}>
          <div className="d-flex gap-2 flex-wrap">
            <Button
              variant={category === 'eyeglasses' ? 'dark' : 'outline-dark'}
              as="a"
              href="/products/eyeglasses"
              className="rounded-pill"
              size="sm"
            >
              Eyeglasses
            </Button>
            <Button
              variant={category === 'sunglasses' ? 'dark' : 'outline-dark'}
              as="a"
              href="/products/sunglasses"
              className="rounded-pill"
              size="sm"
            >
              Sunglasses
            </Button>
            <Button
              variant={category === 'bluelight' ? 'dark' : 'outline-dark'}
              as="a"
              href="/products/bluelight"
              className="rounded-pill"
              size="sm"
            >
              Blue Light
            </Button>
          </div>
        </Col>
      </Row>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-5">
          <p style={{ fontSize: '1.2rem', color: '#666' }}>No products found matching your criteria.</p>
        </div>
      ) : (
        <Row className="g-4">
          {filteredProducts.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard 
                product={product} 
                onAddToCart={onAddToCart}
                onWishlist={onWishlist}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Products;
