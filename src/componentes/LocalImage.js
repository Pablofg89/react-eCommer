import React from 'react'
import Login from '../assets/login.jpg'
import './EcomerCard.css'

const LocalImage = (props) =>{
// Destructurar el API 
const { titulo, descripcion} = props;
return(
    <div className="card">
    <div className="card-body">
        <img style={{width: 175, height: 175, }} className="imgane-item img-thumbnail " alt="Login" src={Login}/>
        <h4 className="cardTitle">{titulo}</h4>
        <p className="card-text text-overflow descriptionText">{descripcion}</p>
    </div>
</div>
)
}

export default LocalImage