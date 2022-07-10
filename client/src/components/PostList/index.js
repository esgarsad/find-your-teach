import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No posts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card mb-3">

            {<p className="card-header">
              <Link 
                to={`/profile/${post.postTitle}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {post.postTitle}
              </Link >{' '}
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
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
