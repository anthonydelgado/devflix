import React, { Component } from 'react';


    class NavBar extends Component {

        render() {
            return (
                <nav className="transparent z-depth-0"  >
                    <div className="container">
                        <div className="nav-wrapper">
                            <a href="http://fownders.com/" className="brand-logo center">
                                <img
                                    src="http://fownders.com/wp-content/themes/fownders/assets/images/logo.png"
                                    alt="logo" className="responsive-img "  />
                            </a>




                        </div>
                    </div>
                </nav>

            )
        }

    }

export default NavBar;

