import { Button as BootstrapButton } from 'react-bootstrap';

const Button = ({ variant = 'dark', children, className = '', ...props }) => {
  return (
    <BootstrapButton
      variant={variant}
      className={`rounded-pill px-4 py-2 ${className}`}
      style={{
        letterSpacing: '1px',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        ...props.style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        if (variant === 'dark') {
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        if (variant === 'dark') {
          e.currentTarget.style.boxShadow = 'none';
        }
      }}
      {...props}
    >
      {children}
    </BootstrapButton>
  );
};

export default Button;
