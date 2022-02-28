import React, {Fragment} from 'react'
import {  FaGraduationCap} from 'react-icons/fa'

function Education() {
    return (
        <Fragment>
        <div className="edu">
             <h4 style={{color:'black'}}>
                <FaGraduationCap />
             </h4>

            <p className="titre_edu">Education</p>
            <h5 style={{fontSize:'12px'}}>Diplome/Degree from College/Institute</h5>
            <h6 style={{fontSize:'10px'}}>Feb 2002 - Aug 2003</h6>
             <hr />
            <p className="titre_edu">Work Experience</p>
            <h5 style={{fontSize:'12px'}}>Diplome/Degree from College/Institute</h5>
            <h6 style={{fontSize:'10px'}}>Feb 2002 - Aug 2003</h6>
        </div>
        </Fragment>
    )
}

export default Education
