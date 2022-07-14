import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './index.css';



function Services() {

    const [projects] = useState([
        {
            name: 'avatar',
            deploy: ' https://fathomless-bayou-71383.herokuapp.com/',
            problem_solved: 'Students.',
            technologies_used: 'JavaScript, Boostrap, Node.js, Handlebars, MsSQL, Heroku.',
        },
        {
            name: 'video-confer',
            deploy: 'https://lisavi28.github.io/leisureapp/',
            problem_solved: 'Creation and development of interactive Front-End project ',
            technologies_used: 'JavaScript, jQuery, Client Side APIs, UI-Kit.'
        },
    ])

  return (
    <section className="my-5">
      <h2 id="logo"> Our services</h2>
      <div className="my-2">


      <div id='Our services' className='row'>
            {projects.map((image, index) => (
                <div  className='project col-4'>
                    {/* <h2>{formatTitle(image.name)}</h2> */}
                    <div>
                    <a className='project-links' href={image.deploy} target='_blank'>
                        <img
                            className='project_img'
                            src={require(`../assets/images/${image.name}.png`)}
                            alt={image.name}
                            key={index}
                        />
                        </a>
                            <div className='row project_details'>
                            
                                <div className='col-10'>
                                    <p className='project-prob'>{image.problem_solved}</p>
                                </div>
                                <div className='col-10'>
                                    <p className='project-tech'>Tech Used: {image.technologies_used}</p>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
            ))}
        </div>
    

     
          <div className="text-center">
          
          <Link to="/results">For students</Link>

          <Link to="/results">For teachers</Link>     
        
          </div>
            
      </div>
    </section>
  )
}

export default Services;


