import React from 'react';
import { remote } from 'electron';

const TitleBar = () => {
  const handleMinimize = () => {
    remote.getCurrentWindow().minimize();
  };

  const handleMaximize = () => {
    const win = remote.getCurrentWindow();
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  };

  const handleClose = () => {
    remote.getCurrentWindow().close();
  };

  return (
    <div className="flex items-center justify-between bg-white h-10 px-4 select-none">
      <div className="flex-grow" style={{ '-webkit-app-region': 'drag' }}></div>
      <div className="flex space-x-2" style={{ '-webkit-app-region': 'no-drag' }}>
        <button 
          onClick={handleMinimize}
          className="w-6 h-6 flex items-center justify-center hover:bg-gray-300"
        >
          _
        </button>
        <button 
          onClick={handleMaximize}
          className="w-6 h-6 flex items-center justify-center hover:bg-gray-300"
        >
          []
        </button>
        <button 
          onClick={handleClose}
          className="w-6 h-6 flex items-center justify-center hover:bg-red-500"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
