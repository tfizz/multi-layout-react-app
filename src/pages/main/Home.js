import React, { useState } from 'react'
import { Doughnut, Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

function Home() {
    const data = {
        labels: [
            'Red',
            'Green',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };

    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fill: true,
            grid: false,
            lineTension: 0.4,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };

      const [chart,setChart] = useState('area');
      const toggleChart = (type)=>{
        setChart(type);
      }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-info">
                        <div className="inner">
                            <h3>150</h3>

                            <p>New Orders</p>
                        </div>
                        <div className="icon">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <a href="#" className="small-box-footer">
                            More info <i className="fas fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-success">
                        <div className="inner">
                            <h3>150</h3>

                            <p>New Orders</p>
                        </div>
                        <div className="icon">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <a href="#" className="small-box-footer">
                            More info <i className="fas fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-warning">
                        <div className="inner">
                            <h3>150</h3>

                            <p>New Orders</p>
                        </div>
                        <div className="icon">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <a href="#" className="small-box-footer">
                            More info <i className="fas fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-danger">
                        <div className="inner">
                            <h3>150</h3>

                            <p>New Orders</p>
                        </div>
                        <div className="icon">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <a href="#" className="small-box-footer">
                            More info <i className="fas fa-arrow-circle-right"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="row">
                <section className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                                <i className="fas fa-chart-pie mr-1"></i>
                                Sales
                            </h3>
                            <div className="card-tools">
                                <ul className="nav nav-pills ml-auto">
                                    <li className="nav-item">
                                        <Link className={`nav-link ${chart === 'area' ? 'active' : ''}`} onClick={()=>toggleChart('area')} to="#">Area</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${chart === 'donut' ? 'active' : ''}`} onClick={()=>toggleChart('donut')} to="#">Donut</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="tab-content p-0">
                                <div className={`chart tab-pane ${chart === 'area' ? 'active' : ''}`}
                                    style={{position: 'relative', height: '400px'}}>
                                    <Line 
                                        data={lineData} 
                                        height={400}
                                        options={{ 
                                            maintainAspectRatio: false, 
                                            legend: { position: 'bottom'},
                                            scales: {
                                                xAxes: [{
                                                    gridLines: {
                                                        display:false
                                                    }
                                                }]
                                            }
                                        }}
                                    />                      
                                </div>
                                <div className={`chart tab-pane ${chart === 'donut' ? 'active' : ''}`}  style={{position: 'relative', height: '400px'}}>
                                    <Doughnut 
                                        data={data} 
                                        height={400} 
                                        options={{ maintainAspectRatio: false, legend: { position: 'right'} }}
                                    />               
                                </div>  
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home
