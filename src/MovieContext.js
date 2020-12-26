import React, { createContext, useState } from 'react';

const MovieContext = createContext();

const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: "$10",
            id: 23124
        },
        {
            name: "Game of thrones",
            price: "$10",
            id: 23125
        },
        {
            name: "Inception",
            price: "$10",
            id: 23126
        }
    ])

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}


export { MovieProvider, MovieContext };