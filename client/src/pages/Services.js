import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Step_1Student from '../assets/images/checkin.png';
import Step_2Student from '../assets/images/search.png';
import Step_3Student from '../assets/images/join.jpg';
import Step_4Student from '../assets/images/reading.png';


// import sectionTeacher from '../assets/images/teacher.png';
import './index.css';

// const styles ={

//        backgroundColor: white 
//     }
    


function Services() {

    const [projects] = useState([
        {
            name: 'learni',
            deploy: ' https://fathomless-bayou-71383.herokuapp.com/',
            problem_solved: 'Students.',
            Step_1: 'Check in',
            Step_2: 'Search',
            Step_3: 'Join',
            Step_4: 'Learn '
            
        },
        {
            name: 'teacher',
            deploy: 'https://lisavi28.github.io/leisureapp/',
            problem_solved: 'Teachers',
            Step_1: 'Check in',
            Step_2: 'Add your Skills',
            Step_3: 'Wait for students',
            Step_4: 'Teach'

            // technologies_used: 'JavaScript, jQuery, Client Side APIs, UI-Kit.'
        },
    ])

  return (
    <section className="my-5 services">
      <h2 id="body"> Our services</h2>
      <div className="my-2">

        {/* <img src={sectionStudent}></img>
        <img src={sectionTeacher}></img> */}

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
                                    <p className='project-tech'>Steps 1 {image.Step_1}</p><img src={Step_1Student}/>

                                    <p className='project-tech'>Steps 2 {image.Step_2}</p><img src={Step_2Student}/>
                                    <p className='project-tech'>Steps 3 {image.Step_3}</p><img src={Step_3Student}/>
                                    <p className='project-tech'>Steps 4 {image.Step_4}</p><img src={Step_4Student}/>



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


