import React from 'react';

const searchIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`;

const Search = () => {
  return (
    <div className="flex justify-center items-center pt-12">
      <div className="bg-white border-2 border-gray-700 rounded-full flex">
        <div className="focus:border-blue-700 focus:ring-2 focus:ring-blue-200">
          <input
            type="text"
            className="rounded-full w-custom-width m-2 py-2 px-4 pl-10 outline-none"
            placeholder="Search 26,233 icons..."
            style={{
              backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(searchIcon)}')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left 10px center',
              backgroundSize: '1.5em',
            }}
          />
        </div>
        
        <div className="flex items-center">
  <span className="text-gray-500 font-thin mr-3 text-sm">Powered by Algolia</span>
</div>

      </div>
    </div>
  );
}

export default Search;
