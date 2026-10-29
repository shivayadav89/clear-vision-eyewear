import { Card } from 'react-bootstrap';

const ReviewCard = ({ name, rating, text, date }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill={i < rating ? "#ffc107" : "#e0e0e0"}
        viewBox="0 0 16 16"
      >
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>
    ));
  };

  return (
    <Card 
      className="border-0 shadow-sm p-4"
      style={{ 
        backgroundColor: '#fff',
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
      <div className="d-flex align-items-center mb-3">
        <div
          className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#1a1a1a',
            fontSize: '1.2rem'
          }}
        >
          {name.charAt(0)}
        </div>
        <div className="ms-3">
          <h6 className="fw-bold mb-1" style={{ color: '#1a1a1a' }}>{name}</h6>
          <div className="d-flex align-items-center">
            {renderStars(rating)}
            <span className="ms-2" style={{ fontSize: '0.8rem', color: '#999' }}>{date}</span>
          </div>
        </div>
      </div>
      <p style={{ color: '#666', lineHeight: '1.8', fontStyle: 'italic' }}>"{text}"</p>
    </Card>
  );
};

export default ReviewCard;
