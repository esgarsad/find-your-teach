import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './index.css';

function Services() {

  return (
    <section className="my-5 services">
        <img
                            className='student_img'
                            src={require(`../assets/images/subjects.png`)}
                            alt='student'
                         
                        />
      <h2 id="body"> Our services</h2>
      <div className="my-2">
      <div id='Our services' className='row'>
                <div  className='projects col-4'>
                <div  className='project col-4 '>
                   <h3>Students</h3>
                                      
                    <Link to="/students">
                        <img
                            className='project_img'
                            src={require(`../assets/images/learni.png`)}
                            alt='student'
                            key='index'
                        />
                        </Link>
                        
                        </div>

                     <div  className='project col-4 '>
                     <h3>Teachers</h3>

                        <Link to="/teachers">
                        <img
                            className='project_img'
                            src={require(`../assets/images/teacher.png`)}
                            alt='teacher'
                            key='index'
                        />
                        </Link>
                            <div className='row project_details'>  
                            </div>
                        </div>
                   
                    </div> 
        </div> 
      </div>
    </section>
  )
}

export default Services;


