import React from 'react';
import './header.css';
import Logo from '../images/Logo_LIGUE1.png';
import { Link } from 'react-router-dom';
import Routes from '../Routes';

class Header extends React.Component {

    render() {
        return (
            <div>
                <meta charSet="utf-8" />
                <title>Header</title>

                <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" /> {/*permet de controler la mse en page et de pas zoomer*/}
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
                <header>
                    <nav className="navbar navbar-expand-sm py-3 navbar-light bg-white">

                        {/* Bouton pour le menu deroulant responsive sur mobile*/}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="mr-auto">
                            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                <img src={`${Logo}`} height="40" width="65" className="img-fluid" alt="" />
                                <ul className="navbar-nav ">
                                    <li className="nav-item active">
                                        <div className="nav-link">
                                            <Link to="/" className="text-secondary">Page Principale</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item mr-3">
                                        <div className="nav-link">
                                            <Link to="/pageAPI" className="text-secondary">Notre API</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="ml-5 mr-auto">
                            <div className="mx-4 py-2 rounded-pill border">
                                <div className="titre"> DASBOARD LIGUE 1</div>
                            </div>
                        </div>


                    </nav >
                </header>
                <Routes />

            </div >
        );
    }
}

export default Header;