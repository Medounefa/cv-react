
import React, {Fragment} from 'react'
import { GiAchievement } from "react-icons/gi";

function Achievements() {
    return (
      <Fragment>
        <div className="ach">
            <h4 style={{color:'black'}}>
                <GiAchievement />
            </h4> 

            <p className="titre_ach">Achievements</p>
            <h5 style={{fontSize:'12px'}}>Awardname at place</h5>
            <h6 style={{fontSize:'10px'}}>Feb 2002</h6>
            <hr />
            <h5 style={{fontSize:'12px'}}>Awardname at place</h5>
            <h6 style={{fontSize:'10px'}}>Feb 2002</h6>
            </div><br /><br />
        </Fragment>
    )
}

export default Achievements
