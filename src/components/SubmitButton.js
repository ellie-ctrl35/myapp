import React from 'react';

const SubmitButton = ({ onClick, height, text, backgroundColor, width }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`rounded-md py-2 text-black ${backgroundColor} ${width}`}
      style={{ height }}
    >
      {text}
    </button>
  );
}

export default SubmitButton;
