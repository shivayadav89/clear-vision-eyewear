import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cart, clearCart }) => {
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'cod'
  });

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = subtotal > 15000 ? subtotal * 0.1 : 0;
  const delivery = subtotal > 10000 ? 0 : 500;
  const total = subtotal - discount + delivery;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    
    // Create WhatsApp message with order details
    const orderItems = cart.map(item => 
      `• ${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');
    
    const message = `
🛒 *NEW ORDER - VISIONA*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Customer Details:*
Name: ${formData.firstName} ${formData.lastName}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📍 Address: ${formData.address}, ${formData.city}, ${formData.state} - ${formData.zipCode}

💳 *Payment Method:* ${formData.paymentMethod.toUpperCase()}

📦 *Order Items:*
${orderItems}

━━━━━━━━━━━━━━━━━━━━━━
💰 *Order Summary:*
Subtotal: ₹${subtotal.toLocaleString()}
${discount > 0 ? `Discount: -₹${discount.toLocaleString()}` : ''}
Delivery: ${delivery === 0 ? 'FREE' : `₹${delivery.toLocaleString()}`}
*Total: ₹${total.toLocaleString()}*
━━━━━━━━━━━━━━━━━━━━━━
    `.trim();
    
    // Open WhatsApp with the message
    const whatsappNumber = '918957819107'; // Your WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Simulate order processing then open WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      clearCart();
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 1500);
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <Container className="py-5 text-center">
        <h2 className="fw-bold mb-4" style={{ fontSize: '2rem', color: '#1a1a1a' }}>
          Your Cart is Empty
        </h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Please add items to your cart before checkout.
        </p>
        <Button variant="dark" size="lg" className="rounded-pill px-5" onClick={() => navigate('/products/eyeglasses')}>
          Shop Now
        </Button>
      </Container>
    );
  }

  if (orderPlaced) {
    return (
      <Container className="py-5">
        <div 
          className="text-center p-5"
          style={{ 
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          <div 
            className="d-inline-flex align-items-center justify-content-center mb-4"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: '#25D366',
              color: '#fff',
              fontSize: '3rem'
            }}
          >
            ✓
          </div>
          <h2 
            className="fw-bold mb-3"
            style={{ 
              fontSize: '2rem', 
              color: '#1a1a1a'
            }}
          >
            Order Placed Successfully!
          </h2>
          <p 
            className="mb-4"
            style={{ 
              color: '#666',
              fontSize: '1.1rem'
            }}
          >
            Your order details have been sent via WhatsApp. We will contact you shortly to confirm your order.
          </p>
          <p style={{ color: '#25D366', fontWeight: '600' }}>
            Redirecting to home page...
          </p>
        </div>
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
        Checkout
      </h1>

      <Row className="g-5">
        <Col lg={8}>
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
              Shipping Information
            </h3>
            <Form onSubmit={handleSubmit}>
              <Row className="g-3 mb-4">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label style={{ color: '#1a1a1a', fontWeight: '500' }}>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: '8px', padding: '0.8rem' }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label style={{ color: '#1a1a1a', fontWeight: '500' }}>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: '8px', padding: '0.8rem' }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: '#1a1a1a', fontWeight: '500' }}>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '8px', padding: '0.8rem' }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: '#1a1a1a', fontWeight: '500' }}>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '8px', padding: '0.8rem' }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: '#1a1a1a', fontWeight: '500' }}>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '8px', padding: '0.8rem' }}
                />
              </Form.Group>

              <Row className="g-3 mb-4">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label style={{ color: '#1a1a1a', fontWeight: '500' }}>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: '8px', padding: '0.8rem' }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label style={{ color: '#1a1a1a', fontWeight: '500' }}>State</Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: '8px', padding: '0.8rem' }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label style={{ color: '#1a1a1a', fontWeight: '500' }}>ZIP Code</Form.Label>
                <Form.Control
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: '8px', padding: '0.8rem' }}
                />
              </Form.Group>

              <h3 
                className="fw-bold mb-4"
                style={{ 
                  fontSize: '1.5rem', 
                  color: '#1a1a1a'
                }}
              >
                Payment Method
              </h3>

              <Form.Group className="mb-4">
                <Form.Check
                  type="radio"
                  name="paymentMethod"
                  id="cod"
                  label="Cash on Delivery (COD)"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleChange}
                  style={{ color: '#1a1a1a', marginBottom: '1rem' }}
                />
                <Form.Check
                  type="radio"
                  name="paymentMethod"
                  id="card"
                  label="Credit/Debit Card"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={handleChange}
                  style={{ color: '#1a1a1a', marginBottom: '1rem' }}
                />
                <Form.Check
                  type="radio"
                  name="paymentMethod"
                  id="upi"
                  label="UPI Payment"
                  value="upi"
                  checked={formData.paymentMethod === 'upi'}
                  onChange={handleChange}
                  style={{ color: '#1a1a1a' }}
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
                Place Order - ₹{total.toLocaleString()}
              </Button>
            </Form>
          </div>
        </Col>

        <Col lg={4}>
          <div 
            className="p-4"
            style={{ 
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}
          >
            <h4 className="fw-bold mb-4" style={{ color: '#1a1a1a' }}>Order Summary</h4>
            
            {cart.map((item) => (
              <div 
                key={item.id}
                className="d-flex justify-content-between align-items-center mb-3 pb-3"
                style={{ borderBottom: '1px solid #eee' }}
              >
                <div>
                  <p className="mb-1 fw-semibold" style={{ color: '#1a1a1a', fontSize: '0.9rem' }}>
                    {item.name}
                  </p>
                  <p style={{ color: '#666', fontSize: '0.85rem' }}>
                    Qty: {item.quantity}
                  </p>
                </div>
                <span style={{ fontWeight: '600', color: '#1a1a1a' }}>
                  ₹{(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}
            
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
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
