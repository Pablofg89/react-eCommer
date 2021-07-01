import React, { useEffect, useState } from 'react';
import ECommerceCard from '../componentes/EcomerCard'
import Navbar from '../componentes/Navbar'
import LocalImage from '../componentes/LocalImage'
import NavbarOptions from '../componentes/NavbarOptions'
import './Main.css'

const Main = () => {

    // Variables de estado
    const [eCommerce, seteCommerce] = useState([]);
    const [numbRand, setnumbRand] = useState([]);
    const [mostrarProd, setMostrarProd] = useState(false);

    //cantiadad de elementos pagina principal 
    const crearNumerosRand = (respuesta) => {
        let arrayNumRand = [];
        for (let i = 0; i < 20;) {
            let numrand = Math.floor(Math.random() * respuesta.length);
            if (!arrayNumRand.includes(numrand)) {
                arrayNumRand.push(numrand);
                i++;
                console.log(numrand);
            }
        }
        setnumbRand(arrayNumRand);
    }
    

    //Funcion de GET al API
    const geteCommer = () => {
        const URL = 'https://ecomerce-master.herokuapp.com/api/v1/item';
        fetch(URL)
            .then(body => body.json())
            .then(respuesta => {
                seteCommerce(respuesta);
                crearNumerosRand(respuesta);
                console.log(respuesta);
            });
    }


    //Onclick card
    const cardOnClick = () => {
        console.log('click card')
        setMostrarProd(true)
        return (<div className="card">
            <div className="card-body">
                <img style={{ width: 175, height: 175, }} className="imgane-item img-thumbnail " src={eCommerce.image || eCommerce.images} alt={"descripcion"} />
                <h4 className="cardTitle">{eCommerce.titulo}</h4>
                <p className="card-text text-overflow descriptionText">{eCommerce.descripcion}</p>
            </div>
        </div>)
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
                    <cardOnClick />
                    : null
            }
            <div className="d-flex align-content-around flex-wrap">
                {numbRand.map((posicion, i) =>
                    eCommerce[posicion].image && eCommerce[posicion].image.slice(0, 4) === 'http' ?
                        <ECommerceCard
                            image={eCommerce[posicion].image}
                            images={eCommerce[posicion].images}
                            titulo={eCommerce[posicion].product_name}
                            price={eCommerce[posicion].price}
                            descripcion={eCommerce[posicion].description ? eCommerce[posicion].description.substring(0, 80) + "..." : "No Descripcion"}
                            key={i}
                            cardOnClick={cardOnClick} />
                        :
                        eCommerce[posicion].images && eCommerce[posicion].images.slice(0, 4) === 'http' ?
                            <ECommerceCard
                                image={eCommerce[posicion].image}
                                images={eCommerce[posicion].images}
                                titulo={eCommerce[posicion].product_name}
                                price={eCommerce[posicion].price}
                                descripcion={eCommerce[posicion].description ? eCommerce[posicion].description.substring(0, 80) + "..." : "No Descripcion"}
                                key={i}
                                cardOnClick={cardOnClick} />
                            :
                            <LocalImage
                                titulo={eCommerce[posicion].product_name}
                                descripcion={eCommerce[posicion].description ? eCommerce[posicion].description.substring(0, 80) + "..." : "No Descripcion"}
                                key={i}
                                cardOnClick={cardOnClick}
                            />
                )
                }
            </div>
        </div>
    )
}

export default Main;