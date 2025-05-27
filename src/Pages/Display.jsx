import React , {useState}from 'react'
import MovieOnClick from '../Components/MovieOnClick'
import "../css/MovieOnClick.css";
import Home from '../Pages/Home';

export default function Display() {

  const [movie, setMovie] = useState(null);
  const [cardClicked, setCardClicked] = useState(false);

  return (
    <div>
      <Home setMovie={setMovie} setCardClicked={setCardClicked}/>
      {cardClicked && <MovieOnClick movie={movie} setCardClicked={setCardClicked}/>}
    </div>
  )
}
