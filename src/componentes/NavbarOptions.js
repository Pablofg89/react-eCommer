import React from 'react'

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
            <nav className="navbar navbar-light bg-light" >
                <form className="container-fluid justify-content-evenly">
                    {categoryFilter.map((result,index) => (
                        <button className="btn btn-sm btn-outline-secondary" type="button" key={index}>{result}</button>
                    )
                    )}
                </form>
            </nav >
        </div>
    )

}
export default NavbarOptions