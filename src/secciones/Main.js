import React, { useEffect, useState } from 'react';
import ECommerceCard from '../componentes/EcomerCard'
import Navbar from '../componentes/Navbar'
import LocalImage from '../componentes/LocalImage'
import NavbarOptions from '../componentes/NavbarOptions'
import Login from '../assets/login.jpg'
import './Main.css'

const Main = () => {

    // Variables de estado
    const [eCommerce, seteCommerce] = useState([]);
    const [numbRand, setnumbRand] = useState([]);
    const [infoCategories, setinfoCategories] = useState([]);
    const [mostrarProd, setMostrarProd] = useState(false);
    const [selectItem, setSelectItem] = useState();
    //const [productosFiltrados, setProductosFiltrados] = useState();




    //Funcion de GET al API
    const geteCommer = () => {
        const URL = 'https://ecomerce-master.herokuapp.com/api/v1/item';
        fetch(URL)
            .then(body => body.json())
            .then(respuesta => {
                seteCommerce(respuesta);
                crearNumerosRand(respuesta);
                setinfoCategories(respuesta);
                //setProductosFiltrados(respuesta);
            });
    }
    //Productos filtrados buscador 
    const filtrarProductos = (busqueda) => {
        let resultado = eCommerce.filter(prod => prod.product_name.toLowerCase().includes(busqueda.toLowerCase()));
        console.log(resultado);
        crearNumerosRand(resultado);
    }
    //cantiadad de elementos pagina principal 
    let crearNumerosRand = (respuesta) => {
        let arrayNumRand = [];
        if (respuesta.length < 20 && respuesta.length !== 0) {
            for (let i = 0; i < respuesta.length;) {
                let numrand = Math.floor(Math.random() * respuesta.length);
                if (!arrayNumRand.includes(numrand)) {
                    arrayNumRand.push(numrand);
                    i++;
                }
            }
            setnumbRand(arrayNumRand);
        } else if (respuesta.length > 20) {
            for (let i = 0; i < 20;) {
                let numrand = Math.floor(Math.random() * respuesta.length);
                if (!arrayNumRand.includes(numrand)) {
                    arrayNumRand.push(numrand);
                    i++;
                }
            }
            setnumbRand(arrayNumRand);
        } else if (respuesta.length === 0) {
            alert('No se registran productros');
        }
    }

    //Select de las categorias
    const categoriaSelect = (categoria) => {
        let arrayCategoria = [];
        if (categoria === "Other") {
            for (let i = 0; i < eCommerce.length; i++) {
                let catFilter = eCommerce[i].category;
                if (catFilter === undefined) {
                    arrayCategoria.push(eCommerce[i]);
                }
            }
        } else {
            for (let i = 0; i < eCommerce.length; i++) {
                let catFilter = eCommerce[i].category;
                if ((catFilter) && (catFilter.toLowerCase() === categoria.toLowerCase())) {
                    arrayCategoria.push(eCommerce[i]);
                }
            }
        }
        seteCommerce(arrayCategoria);
        let rand = arrayCategoria.map((catagoria, i) => {
            return i;
        })
        setnumbRand(rand);
    }

    //Onclick card
    const cardOnClick = (prods) => {
        console.log(prods)
        setSelectItem(prods);
        setMostrarProd(true);
    }

    // El callback del useEffect se ejecutará antes de que el componente se monte
    useEffect(() => {
        geteCommer();
    }, []);

    return (
        <div className="container">
            {/*NAVBAR */}
            <div><Navbar
                filtrarProductos={filtrarProductos}
            /></div>

            {/*Caterigorias */}
            <div>
                <NavbarOptions
                    eCommerceInfo={infoCategories}
                    categoriaSelect={categoriaSelect} />
            </div>

            {/* Carta selecciona de cada Articulos */}
            {mostrarProd ?
                (
                    <div className="itemSelec">
                        <div className="itemImagen">
                            <img className="image" src={selectItem.image || selectItem.images || Login} alt={"descripcion"} />
                        </div>
                        <div className="itemtext">
                            <h4 className="">{selectItem.titulo}</h4>
                            <p className="">{selectItem.descripcion}</p>
                            <p className="precio">{"Precio: $" + selectItem.price}</p>
                        </div>
                        <div>
                            <bottom className="bottomClose" onClick={() => { setMostrarProd(false) }}>X</bottom>
                        </div>
                    </div>

                )
                : null
            }

            {/* Articulos */}
            <div className="d-flex align-content-around flex-wrap">
                {numbRand.map((posicion, i) =>

                    eCommerce[posicion].image && eCommerce[posicion].image.slice(0, 4) === 'http' ?
                        <ECommerceCard
                            image={eCommerce[posicion].image}
                            images={eCommerce[posicion].images}
                            titulo={eCommerce[posicion].product_name}
                            price={eCommerce[posicion].price}
                            descripcion={eCommerce[posicion].description ? eCommerce[posicion].description.substring(0, 100) + "..." : "No Descripcion"}
                            id={i}
                            key={i}
                            cardOnClick={cardOnClick} />
                        :
                        eCommerce[posicion].images && eCommerce[posicion].images.slice(0, 4) === 'http' ?
                            <ECommerceCard
                                image={eCommerce[posicion].image}
                                images={eCommerce[posicion].images}
                                titulo={eCommerce[posicion].product_name}
                                price={eCommerce[posicion].price}
                                descripcion={eCommerce[posicion].description ? eCommerce[posicion].description.substring(0, 100) + "..." : "No Descripcion"}
                                id={i}
                                key={i}
                                cardOnClick={cardOnClick} />
                            :
                            <LocalImage
                                titulo={eCommerce[posicion].product_name}
                                descripcion={eCommerce[posicion].description ? eCommerce[posicion].description.substring(0, 100) + "..." : "No Descripcion"}
                                price={eCommerce[posicion].price}
                                id={i}
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