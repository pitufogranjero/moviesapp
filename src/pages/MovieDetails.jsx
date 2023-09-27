import { useParams } from 'react-router-dom'
import { get } from '../data/httpClient'
import { useEffect,useState } from 'react'
import { getMovieImg } from '../utils/getMovieImg'
import '../pages/movieDetails.css'
import { Link } from 'react-router-dom'


export function MovieDetails(){

    const {movieId} = useParams()
    const [movie, setMovie] = useState([])
    const [genres, setGenres] = useState([])


    useEffect(() => {
        get('/movie/' + movieId).then((data) => {
            setMovie(data)
            setGenres(data.genres[0])
            console.log(data)
        })
    },[movieId])

    const imageUrl = getMovieImg(movie.poster_path, 500);
    // const imageUrl = getMovieImg(movie.poster_path,500)

    return(
        <div className='detailsContainer'>
            <img src={imageUrl} alt={movie.title} className='col movieImage'/>
            <div className='col movieDetails'>
                <p className='title'>
                    {movie.title}
                </p>
                <p>
                    <strong>Genre: </strong>{genres.name}
                </p>
                <p>
                    <strong>Overview: </strong>{movie.overview}
                </p>
                <Link to={'/'}>
                <button className="back-button">Back</button>
                </Link>
            </div>
        </div>
    )
}