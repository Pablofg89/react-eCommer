import React from 'react'
import './NavbarOptions.css'

const NavbarOptions = (props) => {

    // Destructurar el API 
    let { eCommerceInfo } = props;
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
                <p className="pTitle" >Categories</p>
                <form className="fromSec">
                    {categoryFilter.map((result,index) => (
                        <button className="buttonStyle" type="button" key={index}>{result}</button>
                    )
                    )}
                </form>
            </nav >
        </div>
    )

}
export default NavbarOptions