import React from 'react';

const Header = () => {
  return (
    <header className="container  p-6 flex justify-between">
      {/* Logo on the left */}
      <div className="text-2xl font-bold flag-custom-width">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="">
          <style>fill:#2a5aac</style>
          <path d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24V64 350.5 400v88c0 13.3 10.7 24 24 24s24-10.7 24-24V388l80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52V24zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8V334.7l-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5v-237z"/>
        </svg>
      </div>

      {/* Navigation links in one line */}
      <nav className="space-x-4 gap-6 flex items-center nav-custom-width">
        <a href="/" className="text-gray-500 hover:text-blue-400">Start</a>
        <a href="/about" className="text-gray-500 hover:text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className='color-gray-500'>
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
          </svg>
        </a>
        <a href="/contact" className="text-gray-500 hover:text-blue-400">Icons</a>
        <a href="/contact" className="text-gray-500 hover:text-blue-400">Docs</a>
        <a href="/contact" className="text-gray-500 hover:text-blue-400">Plans</a>
        <a href="/contact" className="text-gray-500 hover:text-blue-400">Support</a>
        <a href="/contact" className="text-gray-500 hover:text-blue-400">Podcast</a>
      </nav>

      {/* Sign In button on the right */}
      <button className="text-white py-2 px-4 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
          <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
        </svg>
      </button>
    </header>
  );
}

export default Header;
