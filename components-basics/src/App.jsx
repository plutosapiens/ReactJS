import MovieList from './components/MovieList' ;
import movies from './assets/movies';
import Timer from './components/Timer';
import Counter from './components/Counter';
import './App.css'

function App() {
  return (
    <div>
      <h1>My first dynamic React application</h1>

      <Timer />
      <Counter />

      <MovieList movies={movies} headingText="Movie List" secondaryText = "Secondary Text" />
    </div>
  )
}

export default App
