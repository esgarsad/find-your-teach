import React from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

const Results = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>

{ <form class="card-content white-text text-center" id= "submit-form">
          <input name="product-input" placeholder= "Course" id="type-event" type="text" autofocus="true" class="product-input"/>

         <input name="product-input" placeholder= "Citty" id="type-event" type="text" autofocus="true" class="product-input"/>
         <button type="submit" class="btn" id="submit"><i class="fa fa-fw fa-search "></i>Search</button> 

          </form>  
          } 
          
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

export default Results;
