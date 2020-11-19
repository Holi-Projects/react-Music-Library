import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Artist.css'
import UserAvatar from 'react-user-avatar'

function Artist(props){

  let img = ''
  let bio = ''
  let link = ''
  const genre = []
  let listeners = 0
  let play = 0
  const similar = []
  const[imgVis, setImgVis] = React.useState('visible')
  const[avaVis, setAvaVis] = React.useState('hidden')

  if(props.artist){
  console.log(props.artist.bio)
 
    for (let tag of props.artist.tags.tag) {
      genre.push(<button key={tag.name} id='tag'>{tag.name}</button>);
    }

    for (let art of props.artist.similar.artist) {
      similar.push(<div key={art.name}>
      <img style={{visibility:imgVis}} src={art.image[1]['#text']} onError={loadAva}/>
      <UserAvatar size="68" name={art.name} 
        style={{visibility:avaVis}}/> 
        <p><a href={art.url} >{art.name}</a></p></div>);
      // simImg.push(<img key={art.name} src={art.image[1]['#text']} alt='img' onError={loadAva}/>)
    }


  play = props.artist.stats.playcount
  listeners = props.artist.stats.listeners

  img = props.artist.image[4]['#text']
  bio = props.artist.bio.summary
  link = bio.substring(bio.indexOf('<a'),bio.length-1)
  link = link.substring(link.indexOf('https'),link.indexOf('">'))
  bio = bio.substring(0,bio.indexOf('<a'))
  
  console.log(link)
  //console.log(bio.substring(bio.indexOf('<a'),bio.length-1))
  }

  var zeroCount = 6;
  var playcount = Math.round( play / Math.pow(10,zeroCount) )
  var listencount = Math.round( listeners / Math.pow(10,zeroCount) )

  function loadAva(){
    setImgVis('hidden')  
    setAvaVis('visible')
  }

  function playMusic(){
    location.href = props.artist.url
  }

  if(!props.artist)
  return ("")
  else
  return (
    <div className='content'>
      <div className='top'> 
        <img src={img} style={{visibility:imgVis}} onError={loadAva}/>
        <UserAvatar size="168" name={props.artist.name}
        style={{visibility:avaVis}}/>&nbsp;&nbsp;&nbsp;
        <h1>{props.artist.name}</h1>
        <button onClick={playMusic}>&#x25b6; Play Music</button>
        <div className='stats'>
        <p>Listners: <span>{listencount}M</span></p>&nbsp;&nbsp;
        <p>Playcount: <span>{playcount}M</span></p>
        </div>
      </div>
      
    
      <div>
        <h3>Biography: </h3>{bio}
        <a href={link}>Read more on Last.fm</a>
      </div>

      <div className='genre'>
        <h3>Genre: </h3>{genre}
      </div>

      <div className='similar'>
        <h3>Similar Artist: </h3>
        {similar}
      </div>

    </div>
  )
}

export default Artist
