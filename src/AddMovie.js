import React, { useState, useContext } from "react";
import { MovieContext } from './MovieContext';

function AddMovie () {
    const [inputs, setInputs] = useState({
        name: "",
        price: "",
        id: 0
    })

    const [movies, setMovies] = useContext(MovieContext);

    const handleChange = (event) => {
       setInputs((previousState) => ({
        ...previousState,
        [event.target.name]: event.target.value,
        [event.target.name]: event.target.value,
        [event.target.name]: event.target.value
       }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        return setMovies(previousState => ([
            ...previousState,
            inputs
        ]))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputs.name} placeholder="Enter name" name="name" onChange={(e) => handleChange(e)} />
            <input type="text" value={inputs.price} placeholder="Enter price" name="price" onChange={(e) => handleChange(e)} />
            <input type="text" value={inputs.id} placeholder="Enter id" name="id" onChange={(e) => handleChange(e)} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddMovie;