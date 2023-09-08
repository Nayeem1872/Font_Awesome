import React, { useState } from 'react';
import './App.css';
import Csbf from './components/Csbf';
import Header from './components/Header';
import Main from './components/Main';
import Search from './components/Search';

function App() {
  const [filter, setFilter] = useState('');

  const handleCategoryFilter = (category) => {
    setFilter(category);
  };
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
