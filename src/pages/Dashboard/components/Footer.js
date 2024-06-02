import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('Support');

  return (
    <footer className="w-full h-16 fixed bottom-0 flex flex-row items-center justify-between px-3 bg-white border-2 border-gray-300 border-dotted">
      <h1 className="text-sm text-gray-400">
        © 2024 Redde. All Rights Reserved.
      </h1>
      <div className="flex flex-row mr-64">
        <NavLink
          to="/support"
          className={`text-gray-600 px-3 py-1 ${activeTab === 'Support' ? 'text-red-600' : ''}`}
          onClick={() => setActiveTab('Support')}
        >
          Support
        </NavLink>
        <NavLink
          to="/license"
          className={`text-gray-600 px-3 py-1 ${activeTab === 'License' ? 'text-red-600' : ''}`}
          onClick={() => setActiveTab('License')}
        >
          License
        </NavLink>
        <NavLink
          to="/terms-of-use"
          className={`text-gray-600 px-3 py-1 ${activeTab === 'Terms of Use' ? 'text-red-600' : ''}`}
          onClick={() => setActiveTab('Terms of Use')}
        >
          Terms of Use
        </NavLink>
        <NavLink
          to="/blog"
          className={`text-gray-600 px-3 py-1 ${activeTab === 'Blog' ? 'text-red-600' : ''}`}
          onClick={() => setActiveTab('Blog')}
        >
          Blog
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
