import React from 'react';
import './App.css';
import {
    useParams
} from "react-router-dom";

function Subreddit() {
    const { id } = useParams();

    return (
        <div>Het Subreddit is {id}</div>
    )
}

export default Subreddit;