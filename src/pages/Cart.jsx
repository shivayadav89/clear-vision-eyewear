import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const navigate = useNavigate();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = subtotal > 15000 ? subtotal * 0.1 : 0;
  const delivery = subtotal > 10000 ? 0 : 500;
  const total = subtotal - discount + delivery;

  const handleQuantityChange = (productId, delta) => {
    const item = cart.find(item => item.id === productId);
    if (item) {
      const newQuantity = item.quantity + delta;
      if (newQuantity >= 1 && newQuantity <= 10) {
        updateQuantity(productId, newQuantity);
      }
    }
  };

  if (cart.length === 0) {
    return (
      <Container className="py-5 text-center">
        <h2 
          className="fw-bold mb-4"
          style={{ 
            fontSize: '2rem', 
            color: '#1a1a1a'
          }}
        >
          Your Cart is Empty
        </h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Looks like you haven't added any items to your cart yet.
        </p>
        <Link to="/products/eyeglasses">
          <Button variant="dark" size="lg" className="rounded-pill px-5">
            Continue Shopping
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 
        className="fw-bold mb-5"
        style={{ 
          fontSize: '2.5rem', 
          letterSpacing: '2px',
          color: '#1a1a1a'
        }}
      >
        Shopping Cart
      </h1>

      <Row className="g-5">
        <Col lg={8}>
          <div className="bg-white rounded shadow-sm p-4">
            <Table responsive className="mb-0">
              <thead>
                <tr style={{ borderBottom: '2px solid #eee' }}>
                  <th style={{ color: '#1a1a1a', fontWeight: '600', paddingBottom: '1rem' }}>Product</th>
                  <th style={{ color: '#1a1a1a', fontWeight: '600', paddingBottom: '1rem' }}>Price</th>
                  <th style={{ color: '#1a1a1a', fontWeight: '600', paddingBottom: '1rem' }}>Quantity</th>
                  <th style={{ color: '#1a1a1a', fontWeight: '600', paddingBottom: '1rem' }}>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '1.5rem 0' }}>
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'cover',
                            borderRadius: '8px'
                          }}
                        />
                        <div>
                          <h6 className="fw-bold mb-1" style={{ color: '#1a1a1a' }}>{item.name}</h6>
                          <small style={{ color: '#999' }}>{item.material} • {item.color}</small>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '1.5rem 0', verticalAlign: 'middle' }}>
                      <span style={{ fontWeight: '600', color: '#1a1a1a' }}>₹{item.price.toLocaleString()}</span>
                    </td>
                    <td style={{ padding: '1.5rem 0', verticalAlign: 'middle' }}>
                      <div className="d-flex align-items-center border rounded" style={{ borderColor: '#ddd', width: 'fit-content' }}>
                        <Button
                          variant="light"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, -1)}
                          disabled={item.quantity === 1}
                          style={{ border: 'none', borderRadius: '0' }}
                        >
                          -
                        </Button>
                        <span 
                          className="px-3 py-1"
                          style={{ minWidth: '40px', textAlign: 'center', fontWeight: '600' }}
                        >
                          {item.quantity}
                        </span>
                        <Button
                          variant="light"
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, 1)}
                          disabled={item.quantity === 10}
                          style={{ border: 'none', borderRadius: '0' }}
                        >
                          +
                        </Button>
                      </div>
                    </td>
                    <td style={{ padding: '1.5rem 0', verticalAlign: 'middle' }}>
                      <span style={{ fontWeight: '700', color: '#1a1a1a' }}>₹{(item.price * item.quantity).toLocaleString()}</span>
                    </td>
                    <td style={{ padding: '1.5rem 0', verticalAlign: 'middle' }}>
                      <Button
                        variant="light"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        style={{ border: 'none', color: '#e74c3c' }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>

        <Col lg={4}>
          <div className="bg-white rounded shadow-sm p-4">
            <h4 className="fw-bold mb-4" style={{ color: '#1a1a1a' }}>Order Summary</h4>
            
            <div className="d-flex justify-content-between mb-3" style={{ color: '#666' }}>
              <span>Subtotal</span>
              <span style={{ fontWeight: '600', color: '#1a1a1a' }}>₹{subtotal.toLocaleString()}</span>
            </div>
            
            {discount > 0 && (
              <div className="d-flex justify-content-between mb-3" style={{ color: '#27ae60' }}>
                <span>Discount (10%)</span>
                <span style={{ fontWeight: '600' }}>-₹{discount.toLocaleString()}</span>
              </div>
            )}
            
            <div className="d-flex justify-content-between mb-3" style={{ color: '#666' }}>
              <span>Delivery</span>
              <span style={{ fontWeight: '600', color: delivery === 0 ? '#27ae60' : '#1a1a1a' }}>
                {delivery === 0 ? 'FREE' : `₹${delivery.toLocaleString()}`}
              </span>
            </div>
            
            <hr style={{ borderColor: '#eee' }} />
            
            <div className="d-flex justify-content-between mb-4">
              <span className="fw-bold" style={{ fontSize: '1.2rem', color: '#1a1a1a' }}>Total</span>
              <span className="fw-bold" style={{ fontSize: '1.2rem', color: '#1a1a1a' }}>₹{total.toLocaleString()}</span>
            </div>
            
            {discount > 0 && (
              <div 
                className="text-center mb-3 py-2 rounded"
                style={{ backgroundColor: '#e8f5e9', color: '#27ae60', fontSize: '0.9rem' }}
              >
                🎉 You saved ₹{discount.toLocaleString()} on this order!
              </div>
            )}
            
            <Button
              variant="dark"
              size="lg"
              className="w-100 rounded-pill"
              onClick={() => navigate('/checkout')}
              style={{
                letterSpacing: '1px',
                fontWeight: '600'
              }}
            >
              Proceed to Checkout
            </Button>
            
            <div className="text-center mt-3">
              <Link to="/products/eyeglasses" className="text-decoration-none" style={{ color: '#666', fontSize: '0.9rem' }}>
                Continue Shopping
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
