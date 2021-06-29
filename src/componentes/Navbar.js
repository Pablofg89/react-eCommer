import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <a style={{color:"black", "font-size":"2rem" }} className="navbar-brand" href="hola">E-Commerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="holanavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search"/>
                            <button style={{"background-color":"#05285a","border-color":"#05285a"}} className ="btn btn-primary" type ="submit">Buscar</button>
                        </form>
                    </div>
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button style={{margin:"0 10px", "background-color":"#05285a","border-color":"#05285a"}}className ="btn btn-primary" type ="submit" >SingUp</button>
                                <button style={{"background-color":"#05285a","border-color":"#05285a"}} className ="btn btn-primary" type ="submit" >Login</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;