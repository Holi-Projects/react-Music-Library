import React from 'react';
import Artist from './Artist'

const API_KEY = ''

function Form(props) {
  
  const[artist, setArtist] = React.useState('')
  const[search, setSearch] = React.useState('')


  const handleChange = (e)=>{
      setSearch(e.target.value)
  }

  const formSubmit = (e) =>{
      if(search !== ''){
      //setArtist(search)

    fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${search}&api_key=${API_KEY}&format=json`)
    .then(response => response.json())
    .then(response => {
    setArtist(response.artist)
  })
  .catch(err => { console.log(err); 
  });
      }
      setSearch('')
      e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={formSubmit} >
      <label style={{fontSize:'30px'}}>Artist Name </label>
      <input type='text' 
      placeholder='Search Artist'
      value={search}
      style={{fontSize:'30px',borderRadius:'20px'}}
      onChange={handleChange}/>
      <button style={{fontSize:'30px',borderRadius:'20px'}}>Find</button>
      </form><br/><br/>

      <Artist artist={artist}/>
    </div>
  )
}

export default Form
