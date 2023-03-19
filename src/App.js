import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Galary from './Galary';

const App = () => {
  const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])

  const handlesearch = (e) => {
  setSearch(e.target.value)
  }
  
  const handlesubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=40&format=json&nojsoncallback=1`).then(
    res => setData(res.data.photos.photo)
    )
  }
  console.log(data)



  return (
    <>
    <center className='mt-3'>
      <form>
      <h3>Find Your Favorite Images</h3>
      <div>
        <input onChange={handlesearch} value={search} className='mt-2' type='text' placeholder='search'/><br/>
        <button className='mt-3 btn btn-md btn-outline-danger' onClick={handlesubmit}>search</button>
      </div>
      </form>
      <br/>
      {data.length>=1 ? <Galary data={data}/>:<h4>No data found</h4>}
    </center>
    
    </>
  )
}

export default App
