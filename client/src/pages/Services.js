import React from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

const Services = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between cards">
     
        <div className= "col-5 mb-3" >
          {(
            <PostList
              posts={posts}
              title="Some Posts you might be interested in"
            />
          )}
        </div>
        
      </div>
    </main>
  );
};

export default Services;
