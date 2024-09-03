import { useState, useEffect, useCallback } from 'react';
import './App.css';
import SearchDebounce from './components/SearchDebounce';
import Pagination from './components/Pagination';

// Debounce function outside the component to avoid recreating it


function App() {
 

  return (
    <>
     
    
        <div className='appName'>Welcome to App</div>
        {/* <SearchDebounce></SearchDebounce> */}
        <Pagination />
    
    </>
  );
}

export default App;
