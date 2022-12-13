import React from 'react';
import './Subreddit.css';
import {
    useParams
} from "react-router-dom";

function Subreddit() {
    const { id } = useParams();

    return (
        <>
            <div>Het Subreddit is {id}</div>
            <p>Hoi vanuit de Subredditz</p>
        </>

    );
}

export default Subreddit;