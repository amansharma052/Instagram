import React from 'react'
import { usePost } from '../hook/usePost'
import { useEffect } from 'react'


const Feed = () => {
    const {feed,handleGetFeed ,loading}=usePost()

    useEffect(()=>{
        handleGetFeed()
    },[])

    if(loading || !feed){
        retur (<main><h1>feed is loading...</h1></main>)
    }

    console.log(feed)
  return (
    <div>
      feed
    </div>
  )
}

export default Feed
