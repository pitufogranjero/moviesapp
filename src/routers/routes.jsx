import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'
import { MovieDetails } from '../pages/MovieDetails'

export function MyRoutes({ searchQuery }){

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage  searchQuery={searchQuery}/>} />
                <Route exact path="/movie/:movieId" element={<MovieDetails/>} />
            </Routes> 
        </Router>
    )
}