import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Collections = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/collections', { replace: true });
  }, [navigate]);

  return null;
};

export default Collections;
