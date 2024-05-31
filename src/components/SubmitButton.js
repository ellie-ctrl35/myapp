import React from 'react';

const SubmitButton = ({ onClick, height, text, backgroundColor, width, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ height, backgroundColor, width }}
      className={`rounded-md text-white p-2 ${className}`}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
