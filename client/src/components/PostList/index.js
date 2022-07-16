import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const PostList = ({ posts, title, post }) => {
  
   let user = 'userName';
   if (Auth.loggedIn()) {
   user = Auth.getProfile().data.username;
console.log(user)
}

  if (!posts.length) {
    return <h3>You don't have any Posts yet, start posting now !</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card col-3">

            {<p className="card-header">
                {post.postTitle}
              <p>${post.postPrice}.00/Hour</p>
            </p>            
    }
          
            <div className="card-body">
              <Link to={`/post/${post._id}`}>
              <p>{post.username}</p>
                <p>{post.postText}</p>                
                      <p className="mb-0">
                  Comments: {post.commentCount} 
                </p>
              </Link>
              
              {(user === post.username) ? (
          <button className="btn" >
          Delete Post
        </button>
          ):
          (<>
          </>)
          }
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
