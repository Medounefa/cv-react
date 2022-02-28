import React from 'react'
import { FaPhoneAlt} from 'react-icons/fa';
import { FaMailBulk} from 'react-icons/fa'
import { FaMapMarkerAlt} from 'react-icons/fa'
import Avatar from '../images/Avatar.jpg'

function InfoPersonal() {

    const name = "Medoune Fall";
    const phone = "+0123456789";
    const mail = "name@email.com";
    return (
        <div>
            <img src={Avatar} alt="Avatar" className="avatar"/>
            <h1 className="name">{name}</h1>
            <p className="designa">Developpeur web et mobile</p>
            <hr />
            <h4>
               <FaPhoneAlt/> 
            </h4>
            <p className="phone">{phone}</p>
            <small>Mobile</small>

            <h4>
               <FaMailBulk/> 
            </h4>
            <p className="mail">{mail}</p>
            <small>Personal</small>

            <h4>
               <FaMapMarkerAlt/> 
            </h4>
            <p className="adresse">H-123 Block A <br /> State Country</p>
            <small>Home</small>
        </div>
    )
}

export default InfoPersonal
