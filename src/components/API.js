import React, { useState, useEffect } from "react";

const API = () => {
    const [hasError, setErrors] = useState(false);
    const [planets, setPlanets] = useState({});

    async function fetchData() {
        const res = await fetch("https://swapi.dev/api/planets/");
        res
            .json()
            .then(res => setPlanets(res.results[0]))
            .catch(err => setErrors(err))
    }


    useEffect(() => {
        fetchData();
    });

    return (

        < div >

            <h3>Planet name: {planets.name}</h3>
            <h3>Orbital period:  {planets.orbital_period} days </h3>
            <h3>Gravity: {planets.gravity}</h3>
            <hr />
        </div >
    );
};
export default API;