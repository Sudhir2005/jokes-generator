import React from "react";
import Button from "./Button";
import './Joke.css';

const Joke = () => {
    const [Joke, setJoke] = React.useState(" ");

    const fetchApi = () => {
        fetch("https://v2.jokeapi.dev/joke/Dark?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };

    return (
        <div className="joke">
            <Button callApi={fetchApi} />
            <p>{Joke}</p>
        </div>
    );
}

export default Joke;
