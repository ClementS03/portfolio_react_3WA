import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <div className="sideBar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/avatar.jpeg" alt="profil-pic" />
                    <h2>Seguin Clément</h2>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to='/' activeClassName='navActive'>
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/competences' activeClassName='navActive'>
                            <i class="fas fa-graduation-cap"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/portfolio' activeClassName='navActive'>
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/Contact' activeClassName='navActive'>
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/clementseguin/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ClementS03" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>

                <div className="signature">
                    <p>Seguin Clément - 2020</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;