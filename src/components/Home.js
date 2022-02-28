import React, { Fragment} from 'react'
import InfoPersonal from './InfoPersonal';
import TechSkills from './TechSkills';
import About from './About';
import Work from './Work';
import Education from './Education';
import Achievements from './Achievements';
import Hobbies from './Hobbies';
import MediaSo from './MediaSo';

 function Home() {
    return (
      <Fragment>
       <div className="page">

        <div className="section">
            <InfoPersonal />
            <hr />
            <TechSkills />
            <hr />
            <MediaSo />
           
        </div>

        <div className="section_droite">
         <About />
         <Work />
         <Education />
         <Achievements />
         <Hobbies />
        </div>

        </div>
        </Fragment>
    )
}
export default Home;
