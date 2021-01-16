import React from 'react'
import { Dropdown, NavItem, NavLink } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { Link } from 'react-router-dom';

function Index() {
    const PUBLIC_URL = process.env.PUBLIC_URL;
    return (
        <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={`${PUBLIC_URL}/assets/images/logo.png`} alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                        style={{opacity: .8}}/>
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </Link>
                
                <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse order-3" id="navbarCollapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link">Admin</Link>
                        </li>
                    </ul>

                </div>

                <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink}>
                            <i className="far fa-comments"></i>
                            <span className="badge badge-danger navbar-badge">3</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="right" className="dropdown-menu-lg">
                            <Dropdown.Item>
                                <div className="media">
                                    <img src="https://adminlte.io/themes/dev/AdminLTE/dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                        <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">Call me whenever you can...</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Divider></Dropdown.Divider>
                            <Dropdown.Item>
                                <div className="media">
                                    <img src="https://adminlte.io/themes/dev/AdminLTE/dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                        John Pierce
                                        <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">I got your message bro</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Divider></Dropdown.Divider>
                            <Dropdown.Item>
                                <div className="media">
                                    <img src="https://adminlte.io/themes/dev/AdminLTE/dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3"/>
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                        Nora Silvester
                                        <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-sm">The subject goes here</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Divider></Dropdown.Divider>
                            <Dropdown.Item className="dropdown-footer">See All Messages</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink}>
                            <i className="far fa-bell"></i>
                            <span className="badge badge-warning navbar-badge">15</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="right" className="dropdown-menu-lg">
                            <DropdownItem className="dropdown-header">15 Notifications</DropdownItem>
                            <Dropdown.Item>
                                <i className="fas fa-envelope mr-2"></i> 4 new messages
                                <span className="float-right text-muted text-sm">3 mins</span>
                            </Dropdown.Item>
                            <Dropdown.Divider></Dropdown.Divider>
                            <Dropdown.Item>
                                <i className="fas fa-users mr-2"></i> 8 friend requests
                                <span className="float-right text-muted text-sm">12 hours</span>
                            </Dropdown.Item>
                            <Dropdown.Divider></Dropdown.Divider>
                            <Dropdown.Item>
                                <i className="fas fa-file mr-2"></i> 3 new reports
                                <span className="float-right text-muted text-sm">2 days</span>
                            </Dropdown.Item>
                            <Dropdown.Divider></Dropdown.Divider>
                            <Dropdown.Item className="dropdown-footer">See All Messages</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>
            </div>
        </nav>
    )
}

export default Index
