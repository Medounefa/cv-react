import React from 'react';
import { FaTools} from 'react-icons/fa'

function TechSkills(){

    const skill= "Technicals Skills";
    const skillP = "Personal Skills";

    return(
        <div>
          <h4><FaTools /></h4>
          <p  className="skill">{skill}</p>

          <p className="language1">HTML5,CSS3,JQUERY</p>
          <p className="language2">Angular</p>
          <p className="language3">Bootstrap</p>
          <p className="language4">Wordpess</p>
          <p className="language5">CodeIgniter</p>
          <p className="language6">Photoshop,Illustrator,Xd</p>
          <p className="language7">Invison</p>
          
          <h4><FaTools /></h4>
          <p  className="skill">{skillP}</p>
          <p className="language7">Creativite</p>
          <p className="language7">Leadership</p>
          <p className="language7">Communication</p>
          <br />
          <br />

        </div>
    )

}
export default TechSkills;