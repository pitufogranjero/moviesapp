import { useParams } from 'react-router-dom'
import { get } from '../data/httpClient'
import { useEffect,useState } from 'react'
import { getMovieImg } from '../utils/getMovieImg'
import '../pages/movieDetails.css'
import { Link } from 'react-router-dom'
import { ProgressBar } from '../components/ProgressBar'
import MovieRating from '../components/MovieRating'
import { GenreCapsules } from '../components/GenreCapsules'


export function MovieDetails(){

    const {movieId} = useParams()
    const [movie, setMovie] = useState([])


    useEffect(() => {
        get('/movie/' + movieId).then((data) => {
            setMovie(data)
        })
    },[movieId])

    const imageUrl = getMovieImg(movie.poster_path, 500);
    // const imageUrl = getMovieImg(movie.poster_path,500)
    console.log(movie.genres)
    return(
        <div className='detailsContainer'>
            <img src={imageUrl} alt={movie.title} className='col movieImage'/>
            <div className='col movieDetails'>
                <p className='title'>
                    {movie.title}
                </p>
                {/* <p><GenreCapsules genres={movie.genres}></GenreCapsules></p> */}
                <p><strong>Overview: </strong>{movie.overview}</p>
                <p><strong>IMDB link: </strong><Link to={`https://www.imdb.com/title/${movie.imdb_id}`}>click here</Link></p>
                <p><strong>Release date: </strong>{movie.release_date}</p>
                <p><strong>Popularity: </strong></p>
                <p>
                <ProgressBar progress={movie.popularity}></ProgressBar>
                </p>
                <p><strong>Rating: </strong></p>
                <p>
                <MovieRating rating={movie.vote_average}></MovieRating>
                </p>
                <Link to={'/'}>
                <button className="back-button">Back</button>
                </Link>
            </div>
        </div>
    )
}