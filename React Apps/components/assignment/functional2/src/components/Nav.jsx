import React from 'react'

const Nav = () => {
    let links = ["Cart", "Products", "Orders", "Login", "Logout"];
    return (
        <>
            <nav>
                <ul>
                    {links.map((e, i) => {
                        console.log(i, e, links)
                        return <li key={i}>{e}</li>
                    })}</ul>
            </nav>
        </>
    )
}

export default Nav