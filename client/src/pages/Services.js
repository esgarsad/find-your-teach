import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// import sectionTeacher from '../assets/images/teacher.png';
import './index.css';

function Services() {

    

  return (
    <section className="my-5 services">
      <h2 id="body"> Our services</h2>
      <div className="my-2">


      <div id='Our services' className='row'>
           
                <div  className='project col-4'>
                    <div>
                   

                    <Link to="/students">Students
                        <img
                            className='project_img'
                            src={require(`../assets/images/learni.png`)}
                            alt='student'
                            key='index'
                        />
                        </Link>
                        <Link to="/teachers">Teachers
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


