import React, { useEffect, useState } from 'react';
import ECommerceCard from '../componentes/EcomerCard'
import Navbar from '../componentes/Navbar'
import './Main.css'


const Main = () => {


    // Variables de estado
    const [eCommerce, seteCommerce] = useState([]);
    //cantiadad de elementos pagina principal 
    const elementosEcommer = eCommerce.slice(0,20);
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



    // El callback del useEffect se ejecutará antes de que el componente se monte
    useEffect(() => {
        geteCommer();
    }, []);

    return (
        <div className="container">
            <h1>E-Commerce</h1>

            <div><Navbar/></div>
            
            <div className="d-flex flex-wrap">             
                {elementosEcommer.map((eCommerce,identificador) =>
                        <ECommerceCard
                            image={eCommerce.image}
                            titulo={eCommerce.product_name}
                            descripcion={eCommerce.description}
                            key={identificador} />)
                }
            </div>           
        </div>
    )
}

export default Main;