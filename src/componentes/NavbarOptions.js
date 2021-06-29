import React from 'react'

const NavbarOptions = (props) => {

    // Destructurar el API 
    const {eCategory} = props;
    return (
        <div>
            <nav class="navbar navbar-light bg-light" >
                <form class="container-fluid justify-content-evenly">
                    <button class="btn btn-sm btn-outline-secondary" type="button">Kids</button>
                    <button class="btn btn-sm btn-outline-secondary" type="button">Shoes</button>
                    <button class="btn btn-sm btn-outline-secondary" type="button">Computers</button>
                    <button class="btn btn-sm btn-outline-secondary" type="button">Grocery</button>
                    <button class="btn btn-sm btn-outline-secondary" type="button">Automotive</button>
                    <button class="btn btn-sm btn-outline-secondary" type="button">Toys</button>
                    <button class="btn btn-sm btn-outline-secondary" type="button">Tools</button>
                    <button class="btn btn-sm btn-outline-secondary" type="button">Health</button>
                </form>
            </nav >
        </div>
    )

}
export default NavbarOptions