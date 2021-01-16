import React, { useEffect} from 'react'
import TopNavigation from './top-navigation';
import Footer from './footer';

function Index({ component: Component, title: title, ...rest}) {

    useEffect(() => {
        let body = document.getElementById("app-main");
        body.classList.remove("sidebar-collapse");
        body.classList.remove("sidebar-mini");
        body.classList.add("layout-top-nav");
    })
    return (
        <div className="wrapper">
            <TopNavigation />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark text-capitalize"> { title } </h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Layout</a></li>
                                <li className="breadcrumb-item active">Top Navigation</li>
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
