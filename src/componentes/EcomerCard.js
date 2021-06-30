
import React from 'react'
import './EcomerCard.css'


const ECommerceCard = (props) => {
    // Destructurar el API 
    const { image, images, titulo, test, descripcion } = props;

   
    return (
        <div className="card" onClick={() => { test() }}>
            <div className="card-body">
                <img style={{ width: 175, height: 175, }} className="imgane-item img-thumbnail " src={image || images} alt={"descripcion"} />
                <h4 className="cardTitle">{titulo}</h4>
                <p className="card-text text-overflow descriptionText">{descripcion}</p>
            </div>
        </div>
    )
}

export default ECommerceCard;