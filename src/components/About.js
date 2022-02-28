import React from 'react'
import {FaUserAlt} from 'react-icons/fa'

function About() {

    const about_us = "About";

    return (
        <div className="section2">
            <h4 style={{color:'black'}}>
               <FaUserAlt />
            </h4>
            <p className="about">{about_us}</p>
            <h3 className="text_about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quaerat doloribus necessitatibus ea velit quasi itaque. Animi quibusdam earum libero magnam ratione quisquam eligendi illum, minima suscipit adipisci, deleniti tempora.
            </h3>
        </div>
    )
}

export default About
