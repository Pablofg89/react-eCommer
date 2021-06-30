import React, { useEffect, useState } from 'react';
import ECommerceCard from '../componentes/EcomerCard'
import Navbar from '../componentes/Navbar'
import LocalImage from '../componentes/LocalImage'
import NavbarOptions from '../componentes/NavbarOptions'
import './Main.css'

const Main = () => {

    // Variables de estado
    const [eCommerce, seteCommerce] = useState([]);
    //cantiadad de elementos pagina principal 
    const elementosEcommer = eCommerce.slice(0, 20);
    // Variables de estado
    const [mostrarProd, setMostrarProd] = useState(false);


    //Funcion de GET al API
    const geteCommer = () => {
        console.log('Función GET');
        const URL = 'https://ecomerce-master.herokuapp.com/api/v1/item';
        fetch(URL)
            .then(body => body.json())
            .then(respuesta => {
                seteCommerce(respuesta);
                console.log(respuesta)
            });
    }


    //Onclick card
    const cardOnClick = (item) => {
        console.log('click card')
        setMostrarProd(true)

        // return(
        // <div className="card">
        //     <div className="card-body">
        //         <p>haha</p>
        //         {/* <img style={{ width: 175, height: 175, }} className="imgane-item img-thumbnail " src={item.image || item.images} alt={"descripcion"} />
        //         <h4 className="cardTitle">{titulo}</h4>
        //         <p className="card-text text-overflow descriptionText">{descripcion}</p>
        //         <p className="card-text text-overflow descriptionText">{price}</p> */}
        //     </div>
        // </div>
        // )
    }

    // El callback del useEffect se ejecutará antes de que el componente se monte
    useEffect(() => {
        geteCommer();
    }, []);

    return (
        <div className="container">
            <div><Navbar /></div>
            <div>
                <NavbarOptions eCommerceInfo={eCommerce} />
            </div>
            {
                mostrarProd ?
                    (<div className="card">
                        <div className="card-body">
                            <img style={{ width: 175, height: 175, }} className="imgane-item img-thumbnail " src={eCommerce.image || eCommerce.images} alt={"descripcion"} />
                            <h4 className="cardTitle">{eCommerce.titulo}</h4>
                            <p className="card-text text-overflow descriptionText">{eCommerce.descripcion}</p>
                        </div>
                    </div>)
                    : null
            }
            <div className="d-flex align-content-around flex-wrap">
                {elementosEcommer.map((eCommerce, identificador) =>
                    eCommerce.image ?
                        <ECommerceCard
                            image={eCommerce.image}
                            images={eCommerce.images}
                            titulo={eCommerce.product_name}
                            price={eCommerce.price}
                            descripcion={eCommerce.description}
                            key={identificador}
                            cardOnClick={cardOnClick} />
                        :
                        <LocalImage
                            titulo={eCommerce.product_name}
                            descripcion={eCommerce.description}
                            key={identificador}
                        />
                )
                }
            </div>
        </div>
    )
}

export default Main;