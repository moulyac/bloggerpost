import React,{ useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserPosts = (props)=>{
    const { id }= props.match.params
    const [user,setUser]=useState({})
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
            .then((response)=>{
                const result=response.data
                setUser(result)
            })
            .catch((err)=>{
                alert(err.message)
            })

        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response)=>{
                const post=response.data
                setPosts(post)
            })
            .catch((err)=>{
                alert(err.message)
            })
   },[])
   //console.log(user)
    return(
        <div>
           <h1>User Name - {user.name} </h1>
           <h3>Posts written by {user.name}</h3>

           <ul>
               {
                    posts.map((post,i)=>{
                       return <li key={i}><Link to={`/postContent/${post.id}`}>{post.title}</Link></li>
                    })
               }
           </ul>
        </div>
    )
}
export default UserPosts