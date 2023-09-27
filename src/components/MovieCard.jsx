import './MovieCard.css'; 
import { Link } from 'react-router-dom'

export function MovieCard({ movie }){
    const imageUrl = "https://image.tmdb.org/t/p/w300/" + movie.poster_path;
    
    return(
        <div className='movie_card'>
        <Link to={'/movie/' + movie.id}>

            <img className="poster" width={230} height={345} src={imageUrl} alt='x' />
            <div className="contentBx">
                <button className="details-button">Details</button>    
                <h2>{movie.title}</h2>
            </div>    
        </Link>
        </div>
    )
}