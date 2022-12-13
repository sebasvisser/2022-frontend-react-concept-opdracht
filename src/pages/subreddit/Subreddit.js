import React from 'react';
import './Subreddit.css';
import {
    NavLink,
    useParams
} from "react-router-dom";

function Subreddit() {
    const { id } = useParams();

    return (
        <>
            <div>Het Subreddit is {id}</div>
            <p>We gaan aanroepen vanuit:</p>
            <p>GET https://www.reddit.com/r/{id}/about.json</p>
            <p>Hoi vanuit de Subredditz</p>
            <NavLink to="/">"Take me back</NavLink>
        </>

    );
}

export default Subreddit;