import React from "react";
import style from './header.css'

const Header = () => {

    return <div className='header d-flex'>
        <div className='container'>
            <div className='row'>
                <a href='#' className='btn btn-outline-main'>Star DB</a>
                <ul className="d-flex">
                    <li>
                        <a href="people" className='btn btn-outline-link'>People</a>
                    </li>
                    <li>
                        <a href="planets" className='btn btn-outline-link'>Planets</a>
                    </li>
                    <li>
                        <a href="starships" className='btn btn-outline-link'>Starships</a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
};
export default Header