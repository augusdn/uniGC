import React from 'react';
import {Link} from 'react-router-dom'

import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faComments } from '@fortawesome/free-solid-svg-icons';



const Nav = ({}) =>(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">uniGC</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <FontAwesomeIcon icon={faHome}/><span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      New chat <FontAwesomeIcon icon={faComments}/>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login <FontAwesomeIcon icon={faSignInAlt}/></Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Nav;
