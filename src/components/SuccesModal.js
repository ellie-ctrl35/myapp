import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';
import SubmitButton from './SubmitButton';

const SuccessModal = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
        <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto" />
        <h2 className="text-2xl font-semibold mt-4">Login successful</h2>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
        <SubmitButton
          text="Go To Dashboard"
          backgroundColor="red"
          height="3rem"
          width="100%"
          className="mt-6"
          onClick={() => alert('Navigating to dashboard')}
        />
      </div>
    </div>
  );
};

export default SuccessModal;
