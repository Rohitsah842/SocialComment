import { Title } from 'chart.js';
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import "./Chartcard.css"

function Chartcard() {
    const [chartdata, setchartdata] = useState({});
    const chart = () => {
        setchartdata({

            labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
            datasets: [{
                data: [12, 19, 9, 6, 15, 10, 12],
                backgroundColor: ['rgba(240, 54, 54, .4)'],
                borderWidth: 2,
                fill: true,
                borderColor: 'rgb(240, 54, 54)',
                tension: 0.3

            },
            {
                data: [8, 14, 19, 11, 15, 8, 15],
                backgroundColor: ['rgba(75, 192 ,192, .2)'],
                borderWidth: 2,
                fill: false,
                borderColor: 'rgb(225, 192, 192)',
                tension: 0.3

            }
            ]
        })
    }
    useEffect(() => {
        setTimeout(() => {
            chart();
            console.log('hh')
        }, 1000);


    }, [])

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return (
        <>  <div className="chartcard chartcard_mob">
            <div className="chart-head chart-head_mob">
                <h3>Application Recevied</h3>
                <p>This Year</p>
                <p>This Week</p>
                <p>Today</p>
                <p>Download Sample</p>
            </div>
            <div className="chart-line chart-line_mob">
                <Line data={chartdata} options={options} />
            </div>
        </div>
        </>
    )
}

export default Chartcard
