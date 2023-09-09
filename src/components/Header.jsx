import React from 'react';

const Header = () => {
  return (
    <header className="container  p-6 flex justify-between">
      {/* Logo on the left */}
      <div className="text-2xl font-bold flag-custom-width cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
  <path
    d="M448 48V384c-63.1 22.5-82.3 32-119.5 32c-62.8 0-86.6-32-149.3-32c-20.6 0-36.6 3.6-51.2 8.2v-64c14.6-4.6 30.6-8.2 51.2-8.2c62.7 0 86.5 32 149.3 32c20.4 0 35.6-3 55.5-9.3v-208c-19.9 6.3-35.1 9.3-55.5 9.3c-62.8 0-86.6-32-149.3-32c-50.8 0-74.9 20.6-115.2 28.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32s32 14.3 32 32V76.7c40.3-8 64.4-28.7 115.2-28.7c62.7 0 86.5 32 149.3 32c37.1 0 56.4-9.5 119.5-32z"
    fill="#2b5191"
  />

 
  <animateTransform
    attributeType="xml"
    attributeName="transform"
    type="scale"
    from="1"
    to="1.2"
    begin="mouseover"
    end="mouseout"
    dur="0.3s"
    repeatCount="indefinite"
  />
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
        <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512">
          <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
        </svg>
      </button>
    </header>
  );
}

export default Header;
