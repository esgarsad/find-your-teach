import React from 'react';
import { Link } from 'react-router-dom';

function About() {

  return (
    
    <section className="my-5">
      <h2 id="logo">knowlodge at one click distance</h2>     ;
      <div className="my-2 text-center">
          <>
          <button className="btn" >
          <Link to="/results">Find out</Link>
        </button>        
          </>
          </div> 
    </section>
  );
}

export default About;
