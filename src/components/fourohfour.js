import React, { useState, useEffect } from 'react';

export default function FourOhFour() {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&idRange=0-150&blacklistFlags=nsfw%2Cracist&type=single';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '3aff0b0835mshf29fcbde833e852p104a49jsn3073d7f2aa07',
                    'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                if (result.joke) {
                    setJoke(result.joke);
                } 
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
        <h4 className="focus">404</h4>
        <h1 id="fourohfourtxt">page not found</h1>
        <h3>
          I don't know how you got here but listen to this
        </h3>
        <h3>
          *ahemm ahemm*
        </h3>
        <div className="joke-container">
            <h4>{joke}</h4>
        </div>
              <h5>
              !! any offensive joke is not mine, i am literally just calling an api !!
            </h5>
            </>
    );
}
