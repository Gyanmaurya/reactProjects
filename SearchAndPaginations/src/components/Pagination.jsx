import React, { useEffect, useState } from 'react'

function Pagination() {
   const [data,setData] = useState([]);
   const [currentpage, setCurrentpage ] = useState(1);
   const ItemperPage = 2;

   useEffect(()=>{
    const getData = async()=>{
      try {
           const data = await fetch('https://jsonplaceholder.typicode.com/posts');
           const res = await data.json();
           console.log(res)
           setData(res)
      } catch (error) {
          console.log({"error": error})
      }
    }
    getData()
   },[])

   const lastIndex = currentpage*ItemperPage;
   const firstIndex = lastIndex-ItemperPage;
   
   
  const handleNextPage = ()=>{
    setCurrentpage(currentpage+1)

  }  
  const handlePrePage = ()=>{
     if(currentpage>1){
          setCurrentpage(currentpage-1)
     }
    
  }

  return (
    <>
      {data.slice(firstIndex,lastIndex).map(d=> <div key={d.id}>{d.title}</div> )}
      <button onClick={handleNextPage} disabled={currentpage>= Math.ceil(data.length/ItemperPage)} >Next</button>
      <button onClick={handlePrePage} disabled={currentpage===1} >Pre</button>
    </>
  )
}

export default Pagination