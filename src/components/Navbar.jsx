import React from 'react';
import { Link } from 'react-router-dom';

//Navlink a etiketi yerine kullanılır ve to yerine to property kullanır.
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-2">

            <div className="container-fluid">

                <Link className="navbar-brand" to="/">Writing Challange</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                   
                    <span className="navbar-toggler-icon"></span>

                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div className="navbar-nav">

                        <Link className="nav-link active" aria-current="page" to="/">Anasayfa</Link>

                        <Link className="nav-link" to="/results">Sonuçlarım</Link>

                        <Link className="nav-link" to="/challanges">Metinler</Link>

                        
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;