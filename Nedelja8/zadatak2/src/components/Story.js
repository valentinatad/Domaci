import React, { useState, useEffect } from 'react'
import { getStory} from '../services/hackerNews'
import './story.css'
import {mapTimeString} from './Math'
export const Story = ({storyId}) => {

    const [story,setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then(dunja => dunja && setStory(dunja)) // eslint-disable-next-line
    },[])

    return (
        <div class="story">
        <a href={story.url} target="_blank" rel="noopener noreferrer">
            <h3>{story.title}</h3>
        </a>
        <p>Autor: <b>{story.by}</b></p>
        <p>Objavljeno pre {mapTimeString(story.time)}</p>
        
        </div>
    )
}