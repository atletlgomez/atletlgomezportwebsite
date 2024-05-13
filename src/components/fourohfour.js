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
        <div className="joke-container">
            <p>{joke}</p>
        </div>
    );
}
