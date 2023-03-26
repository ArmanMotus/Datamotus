import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/back.css'

const BackButton = () => {
  const history = useNavigate();

 
  return (
    <div className = 'back-arrow' onClick={() => history(-1)}>
      
    </div>
  );
};

export default BackButton;
