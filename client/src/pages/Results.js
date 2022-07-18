import React from 'react';
import PostList from '../components/PostList';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

const Results = () => {
  const { data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

   return (
    <main>
          { <form className="card-content white-text text-center" id= "submit-form">
          <input name="product-input"  placeholder= "Look for this topic..." id="topic" type="text" autoFocus={true} className="product-input"/>

         <input name="product-input" placeholder= "City" id="type-event" type="text" autoFocus={true} className="product-input"/>
         <button type="submit" className="btn" id="submit"><i className="fa fa-fw fa-search" ></i>Search</button> 

          </form>  
          }  
          
      <div className="flex-row justify-space-between cards results">
     
        <div className= "col-5 mb-3 ind-post" id="ind-post" >
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
