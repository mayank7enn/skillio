import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="flex justify-center py-6 bg-blue-50">
      {/* Dynamic Island Container */}
      <div className="flex items-center space-x-8 bg-gray-800 text-white rounded-full px-8 py-3 shadow-lg">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 rounded-full p-2">
            <span className="text-white text-lg font-bold">S</span> {/* Placeholder for logo */}
          </div>
          <h1 className="text-3xl font-semibold">Skillio</h1>
        </div>

        {/* Navbar Section */}
        <nav className="flex space-x-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="nav-item text-white text-sm font-medium hover:text-gray-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="video-summarizer"
            smooth={true}
            duration={500}
            className="nav-item text-white text-sm font-medium hover:text-gray-400 transition-colors"
          >
            YT Video Summarizer
          </Link>
          <Link
            to="helpdesk"
            smooth={true}
            duration={500}
            className="nav-item text-white text-sm font-medium hover:text-gray-400 transition-colors"
          >
            Helpdesk
          </Link>
          <Link
            to="pdf-summarizer"
            smooth={true}
            duration={500}
            className="nav-item text-white text-sm font-medium hover:text-gray-400 transition-colors"
          >
            PDF Summarizer
          </Link>
          <Link
            to="translator-tts"
            smooth={true}
            duration={500}
            className="nav-item text-white text-sm font-medium hover:text-gray-400 transition-colors"
          >
            AI text-to-audio
          </Link>
          <Link
            to="team"
            smooth={true}
            duration={500}
            className="nav-item text-white text-sm font-medium hover:text-gray-400 transition-colors"
          >
            Team
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
