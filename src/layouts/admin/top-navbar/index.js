import React, { useState } from 'react'
import { Dropdown, NavItem, NavLink } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { Link } from 'react-router-dom';

function Index() {
    const PUBLIC_URL = process.env.PUBLIC_URL;
    const [open,setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen(!open);
        let body = document.getElementById("app-main");
        if(open){
            body.classList.remove("sidebar-collapse");
        }
        else{
            body.classList.add("sidebar-collapse");
        }
    }
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" onClick={toggleSidebar} data-widget="pushmenu" role="button" to="#"><i className="fas fa-bars"></i></Link>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
            </ul>

            <ul className="navbar-nav ml-auto">
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
        </nav>
    )
}

export default Index
