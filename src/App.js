import React, { useState } from 'react';
import './App.css';
import Csbf from './components/Csbf';
import Header from './components/Header';
import Main from './components/Main';
import Search from './components/Search';
import iconsData from './iconData';

function App() {
  const [filter, setFilter] = useState('');

    // Filtering Input Items
    const filteredItems = iconsData.filter(
      (icon) =>
        icon.text.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    );
  
    // Applying selected filter
    const filteredIcons = filteredItems.filter(
      (icon) =>
        !filter ||
        icon.category === filter ||
        icon.featured === filter
    );

   

  return (
   <>
    <Header />
    <Search />
    {/* <Csbf  filter={filter} onCategoryFilter={handleCategoryFilter}/> */}
    <Main filter={filter} />
   </>
  );
}

export default App;
