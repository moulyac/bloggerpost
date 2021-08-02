import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link , Route } from 'react-router-dom'
import Users from './Users'
import Posts from './Posts'
import UserPosts from './UserPosts'
import PostContent from './PostContent'

const App=()=>{
    return (
        <div>
            
                <Link to='/'>Home</Link>&nbsp;
                <Link to='/users'>Users</Link>&nbsp;
                <Link to='/posts'>Posts</Link>
            
             <Route path='/users' component={Users}/>
             <Route path='/posts' component={Posts}/>
             <Route path='/userPost/:id' component={UserPosts}/>
             <Route path='/postcontent/:id' component={PostContent}/>
        </div>
    )
}

export default App