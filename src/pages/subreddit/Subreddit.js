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
    console.log("hoi");
    console.log(id);
    console.log("doei");

    async function getSubredditInfo(subreddit) {
        try {
            const response = await axios.get(`https://www.reddit.com/r/${subreddit}/about.json`);
            const data = response.data;
            // Get a reference to the elements where you want to display the data
            const subredditNameElement = document.getElementById('subreddit-name');
            const subredditDescriptionElement = document.getElementById('subreddit-description');
            const subredditSubscribersElement = document.getElementById('subreddit-subscribers');

            // Set the innerHTML of the elements to the corresponding data
            subredditNameElement.innerHTML = data.data.display_name;
            subredditDescriptionElement.innerHTML = data.data.public_description;
            subredditSubscribersElement.innerHTML = data.data.subscribers;
            console.log(`Subreddit: ${data.data.display_name}`);
            console.log(`Description: ${data.data.public_description}`);
            console.log(`Subscribers: ${data.data.subscribers}`);
        } catch (error) {
            console.error(error);
        }
    }

    getSubredditInfo(id);

    return (
        <>
            <h2>Title</h2>
            <p id="subreddit-name"></p>
            <h2>Description</h2>
            <p id="subreddit-description"></p>
            <h2>Number of Subscribers</h2>
            <p id="subreddit-subscribers"></p>
            <div>Het Subreddit is {id}</div>

            <NavLink to="/">"Take me back</NavLink>
        </>

    );
}

export default Subreddit;