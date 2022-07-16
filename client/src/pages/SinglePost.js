import React from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';

const SinglePost= (props) => {
  const { id: postId } = useParams();
  let user = 'userName';
  if (Auth.loggedIn()) {
  user = Auth.getProfile().data.username;
console.log(user)
}
  
  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {post.username}
          </span>{' '}
          {post.createdAt}
        </p>
        <div className="card-body">
          <p>{post.postText}</p>
          <p>{post.postTitle}</p>
          <p>${post.postPrice}.00/hour</p>

          {(user === post.username) ? (
          <button className="btn" >
          Delete Post
        </button>
          ):
          (<>
           {Auth.loggedIn() && <CommentForm postId={post._id} />}
          </>)
          }
        </div>
      </div>

      {post.commentCount > 0 && (
        <CommentList comments={post.comments} />
      )}
    </div>
  );
};

export default SinglePost;
