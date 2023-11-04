import Movie from "./movie";

export default function MovieList(props) {
    return (
        <div className="movie-list">
            <h1>{props.headingText}</h1>

            <ul>
                <li><Movie data={props.movies[0]} /></li>
                <li><Movie data={props.movies[1]} /></li>
                <li><Movie data={props.movies[2]} /></li>
                <li><Movie data={props.movies[3]} /></li>
                <li><Movie data={props.movies[4]} /></li>
            </ul>
        </div>
    );
}