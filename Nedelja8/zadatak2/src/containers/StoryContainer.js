import React, { useState, useEffect } from 'react';
import { getStoryIds } from '../services/hackerNews';
import { Story } from '../components/Story';
import'./storyContainer.css'

export const StoriesContainer = () => {
  const [storyIds,setStoryIds] = useState([])
  const [niz, setNiz] = useState([])

  useEffect(() => {
    getStoryIds().then(dunja => setStoryIds(dunja))
  },[])

  // useEffect waits ...

    const viseClanaka=()=>{
      setNiz(storyIds.slice(21,41))
    }

  return (<>
    <div className="button2">
      <button onClick={()=>{viseClanaka()}}>Prikazi vise novinskih clanaka:</button>
    </div>
    <div className="storyContainer">
        {storyIds.slice(0,20).map(storyId => <Story storyId={storyId} key={storyId}/>)}
    </div>
    <div className="storyContainer">
        {niz.map(storyId => <Story storyId={storyId} key={storyId}/>)}
    </div>
    </>
  )
}