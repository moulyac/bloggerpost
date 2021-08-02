import React,{ useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PostContent = (props)=>{
    const { id }= props.match.params
    const [userid,setuserId]=useState()
    const [user,setUser]= useState([])
    const [post,setPost]=useState([])
    const [comments,setComments]=useState([])
    
    useEffect(()=>{
       
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response)=>{
                const post=response.data
                setPost(post)
            })
            .catch((err)=>{
                alert(err.message)
            })
        
        axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response)=>{
                const post=response.data
                setComments(post)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])
console.log(post)
    useEffect(()=>{
        if(Object.keys(post).length > 0){
            const uid=post.userId
            setuserId(uid)
            axios.get(`http://jsonplaceholder.typicode.com/users/${uid}`)
                .then((response)=>{
                    const result=response.data
                    setUser(result)
                })
                .catch((err)=>{
                    alert(err.message)
                })
        }
    },[post])

    
    return (
        <div>
            <h1>User Name - {user.name}</h1>
            <p><strong>Title</strong> - {post.title}</p>
            <p><strong>Body</strong> - {post.body} </p>
            <hr/>
            <h3>Comments</h3>
            <ul>{
                    comments.map((comment)=>{
                        return(
                            <li>{comment.body}</li>
                        )
                    })
                } 
            </ul>
            <hr/>
            <div>
            <p><Link to={`/userPost/${userid}`}>More posts of author: {user.name} </Link></p>

            </div>
        </div>
    )
}

export default PostContent