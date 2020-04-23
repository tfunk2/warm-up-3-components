import React from 'react';
import FavoriteMovies from './FavoriteMovies'

export default function InformationSection(props) {
    const { favoritePictures, pictureDescription } = props

    eachPicture = () => favoritePictures.forEach(picture => () => {
        return (
            <>
                <img src={picture} id="favorite-pictures">A Favorite Picture</img>
                <p>{pictureDescription}</p>
            </>
        )
    })

    return (
        <>
            <h3>Pictures I Like</h3>
            eachPicture
            <FavoriteMovies />
        </>
    );
}

// I dont know as much as I thought I did