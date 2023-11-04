import './App.css'
import MovieList from './components/movieList' ;
import movies from './assets/movies';

function App() {
  return (
    <div>
      <h1>My first dynamic React application</h1>

      <MovieList movies={movies} headingText="Movie List" secondaryText = "Secondary Text" />
    </div>
  )
}

export default App
