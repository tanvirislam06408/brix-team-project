

import { useEffect, useState } from 'react';
import './App.css'
import Post from './components/Post';

function App() {

const [data,setData]=useState([]);

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.json())
  .then(data=> setData(data));
},[])



  return (
    // test 123
    <>
        <Post data={data}/>
    </>
  )
}

export default App
