import React, {Fragment} from 'react' 
import {  FaBriefcase} from 'react-icons/fa'

function Work() {
    return (
       <Fragment>
        <div className="section_work">
            <h4 style={{color:'black'}}>
                <FaBriefcase />
            </h4>
            <p className="titre_work">Work Experience</p>
            <h5 style={{fontSize:'12px'}}>Designation at Company Name</h5>
            <h6 style={{fontSize:'10px'}}>April 2015 - Nov 2017</h6>
            <h3 className="text_work">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
             <hr />
            <h5 style={{fontSize:'12px'}}>Designation at Company Name</h5>
            <h6 style={{fontSize:'10px'}}>April 2015 - Nov 2017</h6>
            <h3 className="text_work">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3><br />
            <hr />
            <h5 style={{fontSize:'12px'}}>Designation at Company Name</h5>
            <h6 style={{fontSize:'10px'}}>April 2015 - Nov 2017</h6>
            <h3 className="text_work">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3><br />
        </div>
        </Fragment>
    )
}

export default Work
