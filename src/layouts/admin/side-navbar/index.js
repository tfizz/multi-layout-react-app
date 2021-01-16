import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
const PUBLIC_URL = process.env.PUBLIC_URL;

function Index() {
    const [openProjectMenu,setOpenProjectMenu] = useState(false);
    let match = useRouteMatch();

    const toggleProjectMenu = ()=>{
        setOpenProjectMenu(!openProjectMenu);
    }
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to={`${match.path}`} className="brand-link">
                <img src={`${PUBLIC_URL}/assets/images/logo.png`} alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                    style={{opacity: .8}} />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </Link>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={`${PUBLIC_URL}/assets/images/default-profile.png`} className="img-circle elevation-2" alt="User Image"/>
                    </div>
                    <div className="info">
                        <Link to="#" className="d-block">Alexander Pierce</Link>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <Link to={`${match.path}`} className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Dashboard
                                </p>
                            </Link>
                        </li>
                        <li onClick={toggleProjectMenu} className={`nav-item has-treeview ${openProjectMenu ? 'menu-open' : ''}`}>
                            <Link to="#" className="nav-link">
                                <i className="nav-icon fas fa-tasks"></i>
                                <p>
                                    Projects
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </Link>
                            
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to={`${match.path}/projects/new`} className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>
                                            New Project
                                        </p>
                                    </Link>
                                    <Link to={`${match.path}/projects`} className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>
                                            All Projects
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Index
