import React from 'react';
// import Content from './components/Content';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark text-light">
                <div class="container-fluid">
                    <Link class="navbar-brand text-light" to="/">Webquote</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-light" to="/content">Quote of the day</Link>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 Challenges
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/self-improve">Self-improve</Link></li>
                                    <li><Link class="dropdown-item" to="#">Another action</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li> */}
                        </ul>
                   </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
