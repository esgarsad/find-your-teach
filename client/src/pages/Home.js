import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="my-5">
      <h2 id="logo">knowlodge at one click distance</h2>
      <div className="my-2">

     
          <div className="text-center">
          <>
          <button className="btn" >
          <Link to="/results">Find out</Link>
        </button>
          

          
          </>
          </div>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
          Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
          justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
          dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
          Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </p> */}


        
      </div>
    </section>
  );
}

export default About;




// import React from 'react';
// import PostList from '../components/PostList';
// import PostForm from '../components/PostForm';

// import Auth from '../utils/auth';
// import { useQuery } from '@apollo/client';
// import { QUERY_POSTS } from '../utils/queries';

// const Home = () => {
//   const { loading, data } = useQuery(QUERY_POSTS);
//   const posts = data?.posts || [];

//   const loggedIn = Auth.loggedIn();

//   return (
//     <main>
//       <div className="flex-row justify-space-between cards">
     
//         <div className= "col-5 mb-3" >
//           {(
//             <PostList
//               posts={posts}
//               title="Some Posts you might be interested in"
//             />
//           )}
//         </div>
        
//       </div>
//     </main>
//   );
// };

// export default Home;
