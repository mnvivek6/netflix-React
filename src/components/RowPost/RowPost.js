import React,{useEffect,useState} from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios  from '../axios'
function RowPost(props) {
  const [movies, setMovie] = useState([])
  const [urlid,setUrltId]= useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovie(response.data.results)
    }).catch((err)=>{
      // alert('Network error')
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
console.log(id);
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
  if (response.data.results.length!==0) {
    setUrltId(response.data.results[0])
  }else{
    console.log('Array Empty');
  }
})
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
     {movies.map((obj)=>

      <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'}  src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

     )}
      
      </div>
     { urlid && <Youtube opts={opts} videoId={urlid.key}/>}
    </div>
  )
}

export default RowPost
