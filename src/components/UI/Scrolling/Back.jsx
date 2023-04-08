import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/back.css'

const BackButton = () => {
  const history = useNavigate();

 
  return (
    <div className = 'back-button' onClick={() => history(-1)}>
      <span class="back-icon"></span>
      <span class="back-text">Back</span>
    </div>
  );
};

export default BackButton;
