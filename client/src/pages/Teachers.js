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
                    <div>
                     
                            <div className='row project_details'>
                            
                                <div className='col-10'>

                                <img
                            className='topics_img'
                            src={require(`../assets/images/topics.png`)}
                            alt='student'
                         
                        />
                                    <h2 className='project-prob'>Teachers</h2>
                                </div>
                                <div className='col-10'>
                                    <h3 className='project-tech'>Step 1. Check in</h3><img src={require('../assets/images/log-in.png')}/>
                                    <h3 className='project-tech'>Step 2. Add your skills</h3><img src={require('../assets/images/recruitment.png')}/>
                                    <h3 className='project-tech'>Step 3. Wait for students</h3><img src={require('../assets/images/hourglass.png')}/>
                                    <h3 className='project-tech'>Step 4. Teach </h3><img src={require('../assets/images/school-supplies.png')}/>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>            
      </div>
    </section>
  )
}

export default Teachers;
