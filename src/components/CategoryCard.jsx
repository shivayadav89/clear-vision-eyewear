import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, image, path }) => {
  return (
    <Link to={path} className="text-decoration-none">
      <Card 
        className="border-0 overflow-hidden"
        style={{ 
          cursor: 'pointer',
          position: 'relative',
          height: '400px',
          borderRadius: '8px'
        }}
      >
        <Card.Img 
          src={image} 
          alt={title}
          style={{ 
            height: '100%', 
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <div 
          className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            transition: 'backgroundColor 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
          }}
        >
          <h3 
            className="text-white fw-bold mb-3"
            style={{ 
              fontSize: '2rem', 
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          >
            {title}
          </h3>
          <span 
            className="px-4 py-2 rounded-pill"
            style={{ 
              backgroundColor: '#fff',
              color: '#1a1a1a',
              fontSize: '0.9rem',
              fontWeight: '600',
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1a1a1a';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.color = '#1a1a1a';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            SHOP NOW
          </span>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
