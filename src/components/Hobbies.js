import React, {Fragment} from 'react'
import { GiHobbitDoor } from "react-icons/gi";
import { MdOutlineSportsHandball } from "react-icons/md";
import { GiBasketballBall } from "react-icons/gi"
import { GiTennisBall } from "react-icons/gi";

function Hobbies() {
    return (
        <Fragment>
        <div className="hobb">
              <h4 style={{color:'black'}}>
                  <GiHobbitDoor />
              </h4> 
              <p className="titre_hobb">Hobbies</p>
              <div className="icons">
                <MdOutlineSportsHandball />
                <GiBasketballBall />
                <GiTennisBall />
              </div>
        </div>
        </Fragment>
    )
}

export default Hobbies
