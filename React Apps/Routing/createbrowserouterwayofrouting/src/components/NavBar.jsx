import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <section>
                <nav>
                    <aside>

                        <div>Logo</div>
                    </aside>
                    <aside>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>
                    </aside>
                </nav>
            </section>
        </>
    )
}

export default NavBar
