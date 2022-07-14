import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
//import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';


  const PostForm = () => {

    const [postFormState, setPostFormState] = useState({
      postTitle: '',
      postText: '',
      postPrice: '',
    });
    const [addPost, { error }] = useMutation(ADD_POST);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setPostFormState({
        ...postFormState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  console.log("button clicked")
      try {
         await addPost({
          variables: { ...postFormState },
        });
  
       // setPostFormState('');
      } catch (e) {
        console.error(e);
      }
      console.log(setPostFormState)
    };

  return (
    <div>
     
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
       
      <input
            placeholder="add a title "
            name="postTitle"
             type="postTitle"
            id="postTitle"
      value={postFormState.postTitle}
      className="form-input col-12 col-md-9"
      onChange={handleChange}
    /> 
    <input
            placeholder="add a text "
            name="postText"
            type="postText"
            id="postText"
      value={postFormState.postText}
      className="form-input col-12 col-md-9"
      onChange={handleChange}
    /> 
    <input
            placeholder="add a Price "
            name="postPrice"
            type="postPrice"
            id="postPrice"
      value={postFormState.postPrice}
      className="form-input col-12 col-md-9"
      onChange={handleChange}
    /> 
    
    
    
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
      {error && <div>post failed</div>}
    </div>
  );
};

export default PostForm;
