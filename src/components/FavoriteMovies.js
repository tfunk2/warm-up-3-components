import React from 'react';

export default function FavoriteMovies(props) {
    const { favoriteMovies, moviePosters } = props

    favoriteMovies.forEach(movie => () => {
        <img src={movie} id="favorite-movie">A Favorite Movie</img>
    })

    return (
        <>
            <h2>Favorite Movies</h2>
        </>
    );
}