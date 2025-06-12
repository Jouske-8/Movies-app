import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import Navbar from './Components/Navbar';
import Display from './Pages/Display';
import './css/App.css';

function App() {
  const [movie, setMovie] = useState(null);
  const [cardClicked, setCardClicked] = useState(false);
  const [reviewEvent, setReviewEvent] = useState(false);
  const [reviews, setReviews] = useState([]);

  return (
    <>
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route
            path="/*"
            element={
              <Display
                movie={movie}
                setMovie={setMovie}
                cardClicked={cardClicked}
                setCardClicked={setCardClicked}
                reviewEvent={reviewEvent}
                setReviewEvent={setReviewEvent}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
