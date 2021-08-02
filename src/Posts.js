import React,{ useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Posts = ()=>{
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/posts`)
        .then((response)=>{
            const post=response.data
            setPosts(post)
        })
    },[])
    
    return(
        <div>
            <h1>Total Posts - {posts.length} </h1>
            <ul>
                {
                    posts.map((post)=>{
                        return <li key={post.id}><Link to={`/postContent/${post.id}`}>{post.title}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}
export default Posts