import './App.css';
import { useState } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=cab58688';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchMovies = async (title) => {
    setLoading(true);
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    setLoading(false);
  };

  const handlePress = (e) => {
    if (e.key === 'Enter') {
      setSearched(true);
      searchMovies(searchTerm);
      setSearchTerm('');
    }
  };

  const handleSearchClick = () => {
    searchMovies(searchTerm);
    setSearched(true);
    setSearchTerm('');
  };

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onKeyDown={handlePress}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt='search' onClick={handleSearchClick} />
      </div>
      {loading ? (
        <div className='empty'>
          <h2>Loading...</h2>
        </div>
      ) : movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : searched ? (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      ) : null}
    </div>
  );
}

export default App;
