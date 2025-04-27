import PropTypes from 'prop-types';
import React from 'react';

const Subtitile = ({ text, className = '' }) => {
  return (
    <>
      <h4 className={`flex items-center text-[#010B21] font-[Manrope] text-[14px] not-italic font-medium leading-[22.96px] uppercase ${className}`}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="3"
            viewBox="0 0 17 3"
            fill="none"
          >
            <path
              d="M1 1.5H16"
              stroke="#010B21"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        {text}
      </h4>
    </>
  );
};



export default Subtitile;
