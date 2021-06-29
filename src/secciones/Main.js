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
    //Funcion de GET al API
    const geteCommer = () => {
        console.log('Función GET');
        const URL = 'https://ecomerce-master.herokuapp.com/api/v1/item';
        fetch(URL)
            .then(body => body.json())
            .then(respuesta => {
                seteCommerce(respuesta);
                console.log(respuesta);
            });
    }
    const geteCategory = () => {
        const URL = 'https://ecomerce-master.herokuapp.com/api/v1/item';
        fetch(URL)
            .then(body => body.json())
            .then(respuesta => {
                seteCommerce(respuesta);
            });
    }

    // El callback del useEffect se ejecutará antes de que el componente se monte
    useEffect(() => {
        geteCommer();
        geteCategory();
    }, []);

    return (
        <div className="container">
            <div><Navbar /></div>
            <div>
                {elementosEcommer.map((eCategory, identificador) =>
                    <NavbarOptions
                        eCategory={eCategory.category}
                        key={identificador}
                    />
                )}
            </div>
            <div className="d-flex align-content-around flex-wrap">
                {elementosEcommer.map((eCommerce, identificador) =>
                    eCommerce.image ?
                        <ECommerceCard
                            image={eCommerce.image}
                            images={eCommerce.images}
                            titulo={eCommerce.product_name}
                            descripcion={eCommerce.description}
                            key={identificador} />
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