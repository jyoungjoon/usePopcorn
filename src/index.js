import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// function MovieReview() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <>
//       <StarRating onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars!</p>
//     </>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Ok', 'Good', 'Amazing']}
    />
    <StarRating maxRating={5} color="red" className="test" defaultRating={3} />
    <MovieReview /> */}
  </React.StrictMode>
);
