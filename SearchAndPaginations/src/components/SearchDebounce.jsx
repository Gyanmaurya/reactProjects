
import React from 'react'
import { useState, useEffect, useCallback } from 'react';
function SearchDebounce() {

     const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const [filterdata, setFilterdata] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilterdata(data);
      });
  }, []);
  
  // const debounce = (func, delay) => {
  //   let timer;
  //   return (...args) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       func(...args);
  //     }, delay);
  //   };
  // };

  const debounce = (func,delay)=>{
        let timer;
         return (...arg)=> { 
          clearTimeout(timer)
          timer = setTimeout(()=>{
            func(...arg)
          },delay)
          
         }
  }
  

  // Debounced function using useCallback to ensure it does not change on re-renders

  const debouncedFilter = 
    debounce((filterText) => {
      const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilterdata(filteredUsers);
    }, 500)
   

  const handleChange = (e) => {
    const filterText = e.target.value;
    setFilter(filterText);

    // Call the debounced function
    debouncedFilter(filterText);
  };

  return (
     <>
     <input type="text" value={filter} onChange={handleChange} />
     {filterdata.length > 0 ? (
       filterdata.map((user) => <div key={user.id}>{user.name}</div>)
     ) : (
       <div>User Not found</div>
     )}
   </>
  )
}

export default SearchDebounce