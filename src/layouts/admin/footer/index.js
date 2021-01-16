import React from 'react'

function index() {
    return (
        <footer className="main-footer">
            <div className="float-right d-none d-sm-inline">
                <b>Version</b> 3.0.0
            </div>
            <strong>Copyright &copy; { new Date().getFullYear() } <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
        </footer>
    )
}

export default index
