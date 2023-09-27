import React from 'react';
import {ContextMovieCard} from '../components/ContextMovieCard'
// import { useParams } from 'react-router-dom'

export function LandingPage({ searchQuery }) {

    return(
        <ContextMovieCard searchQuery={searchQuery} />
    )
}