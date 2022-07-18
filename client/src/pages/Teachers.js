import React from 'react';
// import { Link } from 'react-router-dom';
import { useState } from 'react';

import './index.css';  

function Teachers() {

    const [projects] = useState([
        {
            name: 'teacher',
            problem_solved: 'Teachers',
            Step_1: 'Check in',
            Step_2: 'Add your Skills',
            Step_3: 'Wait for students',
            Step_4: 'Teach'
        },
    ])

  return (
    <section className="my-5 services">
      <div className="my-2">
      <div id='Our services' className='row'>

                <div  className='project col-4'>
             

                        <img
                            className='topics_img'
                            src={require(`../assets/images/teachs.png`)}
                            alt='student'
                        />
                            <div className='row project_details'>

                                
                                <div className='col-10'>
                                <h2 className='project-prob'>Teachers</h2>
                                </div>

                                <div className='col-10 serv-cont'>
                                    <div className='steps'><h3 className='project-tech'>Step 1. Check in</h3><img src={require('../assets/images/log-in.png')}/></div>
                                    <div className='steps'><img src={require('../assets/images/cv.png')}/><h3 className='project-tech'>Step 2. Add your skills</h3></div>
                                    <div className='steps'><h3 className='project-tech'>Step 3. Wait for students</h3><img src={require('../assets/images/symbo.png')}/></div>
                                    <div className='steps'><img src={require('../assets/images/schoolde.jpg')}/><h3 className='project-tech'>Step 4. Teach </h3></div>
                                </div>
                        
                                </div> 
                                
            </div> 

         </div>    
      </div>
    </section>
  )
}

export default Teachers;
