import React from 'react'

function Index() {
    const PUBLIC_URL = process.env.PUBLIC_URL;
    const projects = [{
        id: 0,
        name: "AdminLTE",
        members: [0,1,2,3],
        progress: 57,
        completed: true 
    },{
        id: 1,
        name: "AdminLTE-v2",
        members: [2,3],
        progress: 35,
        completed: true 
    }];


    return (
        <div className="container-fluid">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Projects</h3>

                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                        <i className="fas fa-minus"></i></button>
                        <button type="button" className="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                        <i className="fas fa-times"></i></button>
                    </div>
                </div>

                <div className="card-body p-0">
                    <table className="table table-striped projects">
                        <thead>
                            <tr>
                                <th style={{width: "1%"}}>
                                    #
                                </th>
                                <th style={{width: "20%"}}>
                                    Project Name
                                </th>
                                <th style={{width: "30%"}}>
                                    Team Members
                                </th>
                                <th>
                                    Project Progress
                                </th>
                                <th style={{width: "8%"}} className="text-center">
                                    Status
                                </th>
                                <th style={{width: "20%"}}>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                projects.map((project)=> (
                                    <tr key={project.id}>
                                        <td>
                                            #
                                        </td>
                                        <td>
                                            <a>
                                                { project.name }
                                            </a>
                                            <br/>
                                            <small>
                                                Created 01.01.2019
                                            </small>
                                        </td>
                                        <td>
                                            <ul className="list-inline">
                                                {
                                                    project.members.map((key)=> (
                                                        <li key={key} className="list-inline-item">
                                                            <img alt="Avatar" className="table-avatar" src={`${PUBLIC_URL}/assets/images/default-profile.png`}/>
                                                        </li>
                                                    ))
                                                }
                                                
                                            </ul>
                                        </td>
                                        <td className="project_progress">
                                            <div className="progress progress-sm">
                                                <div className="progress-bar bg-green" role="progressbar" style={{width: project.progress + "%"}}>
                                                </div>
                                            </div>
                                            <small>
                                                {project.progress}% Complete
                                            </small>
                                        </td>
                                        <td className="project-state">
                                            <span className="badge badge-success">Success</span>
                                        </td>
                                        <td className="project-actions text-right">
                                            <a className="btn btn-primary btn-sm" href="#">
                                                <i className="fas fa-folder">
                                                </i>
                                                View
                                            </a>
                                            <a className="btn btn-info btn-sm" href="#">
                                                <i className="fas fa-pencil-alt">
                                                </i>
                                                Edit
                                            </a>
                                            <a className="btn btn-danger btn-sm" href="#">
                                                <i className="fas fa-trash">
                                                </i>
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Index
