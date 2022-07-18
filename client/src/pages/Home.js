import React from 'react';
import { Link } from 'react-router-dom';

function Home() {      

  return (
    
    <section className="my-5 intro-p">
         <img
                           className='student_img focus1'
                           src={require(`../assets/images/focus1.png`)}
                           alt='student'
                        
                       />
      <h2 className="logo title-home">Knowledge at one click distance</h2>     ;
      <div className="my-2 text-center">

          <>
          <button className="btn" >
          <Link to="/results">Find out</Link>
        </button>        
          </>
          </div> 

          <div className='row intro-home '>
            
                                    <div className='intro'><h4 className='intro-text'>Fast and effective search</h4><img src={require('../assets/images/cvcv.png')}/></div>
                                    <div className='intro'><h4 className='intro-text'>Choose the best teachers</h4><img src={require('../assets/images/laptop.png')}/></div>
                                    <div className='intro'><h4 className='intro-text'>Start studying</h4><img src={require('../assets/images/brain.png')}/></div>
                                    </div>

    </section>
  );
}

export default Home;


