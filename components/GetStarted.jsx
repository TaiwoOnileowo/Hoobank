
import React, { useState } from 'react';
import styles from '../styles';
import { arrowUp } from '../assets';

const GetStarted = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    
    setTimeout(() => {
      setClicked(false);
    }, 500); 
  };

  return (
    <div
      className={`${styles.flexCenter} rounded-full bg-blue-gradient p-[2px] cursor-pointer glow-on-hover ${
        clicked ? 'clicked' : ''
      }`}
      onClick={handleClick}
    >
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full border-[3px] border-solid`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>Get</span>
          </p>
          <img src={arrowUp} alt='arrow' className='w-[23px] h-[23px] object-contain'/>
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
