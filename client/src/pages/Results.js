import React from 'react';
import PostList from '../components/PostList';


import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

const Results = () => {
  const { data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

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
              title="Here are some teachers you might find helpful"
            />
          )}
        </div>
        
      </div>
    </main>
  );
};

export default Results;
