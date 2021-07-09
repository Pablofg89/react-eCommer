import React from 'react'
import './NavbarOptions.css'

const NavbarOptions = (props) => {

    // Destructurar el API 
    let { eCommerceInfo,categoriaSelect} = props;

    //Select catarigorias
    eCommerceInfo = eCommerceInfo.map(item => item.category)
    let categoryFilter = Array.from(new Set(eCommerceInfo));
    categoryFilter = categoryFilter.map(category => {
        if (category === undefined) {
            return "Other";
        } else {
            return category;
        }
        
    })

    return (
        <div>
            <nav className="" >
            <hr/>
                <p className="pTitle" >Categorias</p>
                <form className="fromSec">
                    {categoryFilter.map((result,index) => (
                        <button className="buttonStyle" type="button" key={index} onClick={() => {categoriaSelect(result)}} >{result}</button>
                    )
                    )}
                </form>
                <hr/>
            </nav >
        </div>
    )

}
export default NavbarOptions