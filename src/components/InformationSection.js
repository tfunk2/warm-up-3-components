import React from 'react';
import PictureSection from './PictureSection'

export default function InformationSection(props) {
    const { name, age, height } = props

    return (
        <>
            <h2>Information Container</h2>
            <p id="name">Name: {name}</p>
            <p id="age">Age: {age}</p>
            <p id="height">Height: {height}</p>
            <PictureSection />
        </>
    );
}


