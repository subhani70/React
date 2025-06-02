import React, { Fragment } from 'react'

const Nav = () => {
    let links = ["Home", "About", "Contact", "Login", "Logout"];
    return (
        <nav>
            <ul>
                {links.map((ele, index) => {
                    return <Fragment key={index}> <li ><a href="">{ele}</a></li>
                    </Fragment>
                })}
            </ul>
        </nav>
    )
}

export default Nav