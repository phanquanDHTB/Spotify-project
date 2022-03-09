import classes from "./home.module.scss"
import {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload,  } from "@fortawesome/free-solid-svg-icons"
import {faSpotify} from '@fortawesome/free-brands-svg-icons'
import axios from "axios"
import AudioPlayer from 'react-h5-audio-player'
import "react-h5-audio-player/lib/styles.css"

export default function Home() {
const listSongAPI = 'http://localhost:3000/listSong'

  const [data, setData] = useState([])
  const [id, setId] = useState(null)
  const [currentSong,setCurrentSong] = useState({})

  useEffect(() => {
    axios.get(listSongAPI)
  .then((response) => {
    // handle success
    // console.log("axios",response.data)
    setData(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  },[])

  // handle event
  const handleClickSong = (song, index) => {
    setId(song.id)
    const currentSong = data.find((x) => x.id === song.id )
    console.log(currentSong);
    setCurrentSong(currentSong)
  }

  const handleClickNext = () =>{
    setId(id + 1);
    const currentSong = data.find((x) => x.id === id + 1 )
    setCurrentSong(currentSong)
  }
  const handleClickPrevios = () => {
    setId(id - 1);
    const currentSong = data.find((x) => x.id === id - 1 )
    setCurrentSong(currentSong)
  }
 
 
  return (
    <div className={classes.home}>
      <nav className={classes.navbar}>
        <FontAwesomeIcon icon={faSpotify} style={{marginRight:'20px'}}/>
        Spotify
      </nav>

      <div className={classes.main}>
        <div className={classes.detailSong}>
           <div className={classes.overlay} style={{backgroundImage: `url(${currentSong.links ? currentSong.links.images[1].url: ""})`}}>
          </div>
          
          {currentSong && 
          <div className={classes.info} style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <div className={classes.info_text}>
              <h2 style={{color: "#fff", textAlign: "center"}}>Now Playing</h2>
              <h3 style={{color: "#fff", textAlign: "center"}}>{currentSong.name}</h3>
              <span style={{ display: "block", textAlign: "center"}}>{currentSong.author}</span>
            </div>
            <div style={{width: "100%"}}>
              <img className={classes.img} src={currentSong.links ? currentSong.links.images[0].url: ""} alt=""/>
            </div>
          </div>}
        </div>

        <div className={classes.listSong}>
          <table>
            <thead style={{position: "sticky", top: 0}}>
             <tr style={{backgroundColor:'#334155', height:'50px'}}>
                <th style={{width:'10vw', color:'white'}}>#</th>
                <th style={{width:'60vw', textAlign:'left', color:'white'}}>Title</th>
                <th style={{width:'10vw', color:'white'}}></th>
                <th style={{width:'20vw', color:'white', textAlign: "left"}}>Author</th>
                <th style={{width:'10vw', textAlign:'center', color:'white'}}><FontAwesomeIcon icon={faDownload}/></th>
             </tr>
            </thead>

            <tbody>
              {
                data.map((song, index) => (
                <tr key={index} 
                className={id === song.id && classes.active}
                onClick= {() => handleClickSong(song)}
                >
                <td style={{width:'10vw', textAlign:'center'}}>{song.id + 1}</td>
               

                <td style={{width:'60vw', textAlign:'left'}}>{song.name}</td>
                <td style={{width:'10vw', textAlign:'center'}}>
                  <img className={classes.thumb} src={song.links.images[0].url} alt="" />
                  </td>
                <td style={{width:'20vw'}}>{song.author}</td>
                <td style={{width:'10vw', textAlign:'center'}}>
                  <a href={song.url}><FontAwesomeIcon icon={faDownload}/></a>
                </td>
              </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

      <div  className={classes.playSong}>
         <AudioPlayer style={{backgroundColor:'#111827'}}
         className={classes.player_music}
         src={currentSong && currentSong.url}
         layout="stacked-reverse"
         showSkipControls={true}
         showJumpControls={false}
        onClickNext={handleClickNext}
         onClickPrevious={handleClickPrevios}
      />
      </div>
    </div>
  )
}
