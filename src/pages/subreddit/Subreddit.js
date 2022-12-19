import React, {
    useEffect,
    useState
} from 'react';
import './Subreddit.css';
import {
    NavLink,
    useParams
} from "react-router-dom";
import axios
    from "axios";

function Subreddit() {
    const { id } = useParams();

    async function getSubredditInfo(subreddit) {
        try {
            const response = await axios.get(`https://www.reddit.com/r/${subreddit}/about.json`);
            const data = response.data;
            console.log(`Subreddit: ${data.data.display_name}`);
            console.log(`Description: ${data.data.public_description}`);
            console.log(`Subscribers: ${data.data.subscribers}`);
        } catch (error) {
            console.error(error);
        }
    }

    getSubredditInfo('javascript');

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