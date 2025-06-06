import React , {useState}from 'react'
import { useLocation } from 'react-router-dom';
import MovieOnClick from '../Components/MovieOnClick'
import "../css/MovieOnClick.css";
import Home from '../Pages/Home';
import Favorites from './Favorites';

export default function Display() {

  const [movie, setMovie] = useState(null);
  const [cardClicked, setCardClicked] = useState(false);
  const location = useLocation().pathname;

  return (
    <div>
      {location === '/favorites' ? (
        <Favorites setMovie={setMovie} setCardClicked={setCardClicked} />
      ) : (
        <Home setMovie={setMovie} setCardClicked={setCardClicked} />
      )}
      
      {cardClicked && <MovieOnClick movie={movie} setCardClicked={setCardClicked}/>}
    </div>
  )
}
