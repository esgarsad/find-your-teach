import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './index.css';

function Students() {

    const [projects] = useState([
        {
            name: 'learni',
            problem_solved: 'Students.',
            Step_1: 'Check in',
            Step_2: 'Search',
            Step_3: 'Join',
            Step_4: 'Learn '
            
        },
       ])

  return (
    <section className="my-5 services">
      <div className="my-2">
      <div id='Our services' className='row'>
           
                <div  className='project col-4'>
                   
                    <img
                            className='student_img'
                            src={require(`../assets/images/studentsss.png`)}
                            alt='student'
                         
                        />
                            <div className='row project_details'>
                            
                                <div className='col-10'>
                                    <h2 className='project-prob'>Students</h2>
                                </div>
                                <div className='col-10 serv-cont'>
                                   <div className='steps'> <h3 className='project-tech'>Step 1. Check in</h3><img src={require('../assets/images/checkin.png')}/></div>
                                    <div className='steps'><img src={require('../assets/images/search.png')}/><h3 className='project-tech'>Step 2. Search</h3></div>
                                    <div className='steps'><h3 className='project-tech'>Step 3. Join</h3><img src={require('../assets/images/join.jpg')}/></div>
                                    <div className='steps'><img src={require('../assets/images/reading.png')}/><h3 className='project-tech'>Step 4. Learn</h3></div>
                                </div>    
                            </div>
                        
                    </div>
        </div>                
      </div>
    </section>
  )
}

export default Students;

