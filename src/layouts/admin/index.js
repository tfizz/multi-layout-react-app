import React, { useEffect } from 'react';
import TopNavbar from './top-navbar';
import SideNavbar from './side-navbar';
import Footer from './footer';

function Index({ component: Component, ...rest}) {
    useEffect(() => {
        let body = document.getElementById("app-main");
        body.classList.add("sidebar-mini");
        body.classList.remove("layout-top-nav");
    })
    return (
        
        <div className="wrapper">
            <TopNavbar />

            <SideNavbar />
            
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Starter</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Starter Page</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div className="content">
                    <Component {...rest} />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Index
