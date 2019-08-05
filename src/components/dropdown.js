import React, { Component } from 'react';
import { Link } from 'react-scroll';

class Dropdown extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {

        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });

        }
    }

    render() {
        return (

            <div
                className="dropdown">
                <i onClick={this.showMenu} className="fas fa-bars"></i>

                {
                    this.state.showMenu
                        ? (
                            <div
                                className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <h6 className="nav-item pointer">
                                    <Link activeclass="active" className="nav-link cgreen text-white" to="Hakkımda" spy={true} smooth={true} duration={500} >Hakkımda</Link>
                                </h6>
                                <h6 className="nav-item pointer">
                                    <Link activeclass="active" className="nav-link cgreen text-white" to="Servisler" spy={true} smooth={true} duration={500} >Servisler</Link>
                                </h6>
                                <h6 className="nav-item pointer">
                                    <Link activeclass="active" className="nav-link cgreen text-white" to="Projeler" spy={true} smooth={true} duration={500} >Projeler</Link>
                                </h6>
                                <h6 className="nav-item pointer">
                                    <Link activeclass="active" className="nav-link cgreen text-white" to="Kurslar" spy={true} smooth={true} duration={500} >Kurslar</Link>
                                </h6>
                                <h6 className="nav-item pointer">
                                    <Link activeclass="active" className="nav-link cgreen text-white" to="İletişim" spy={true} smooth={true} duration={500} >İletişim</Link>
                                </h6>

                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

export default Dropdown;