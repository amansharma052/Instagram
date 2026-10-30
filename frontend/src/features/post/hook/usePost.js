import { getFeed } from "../services/postApi";
import { useContext } from "react";
import { PostContext } from "../postContext";

export const usePost =()=>{
    const context =useContext(PostContext)
    const{loading, setLoading, post, setPost, feed, setFeed }= context 

    const handleFeed =async ()=>{
        setLoading(true)
        const data =await get.Feed()
        setFeed(data.posts)
        setLoading(false)

    }
    return{loading,feed,post,handleFeed}
}