import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import "./Doughnut_chart.css"

function Doughnut_chart() {
    const [chartdata, setchartdata] = useState({});
    const chart = () => {
        setchartdata({
            labels: [
                'Red',
                'Yellow',
                'Blue'
            ],
            datasets: [{
                data: [45, 30, 25],
                backgroundColor: [
                    '#ab0fab',
                    '#dd3f39',
                    '#00bfff'
                ],
                borderWidth: [
                    0,
                    0,
                    0
                ]
            }]
        })
    }
    useEffect(() => {
        chart();
    }, []);

    return (
        <>
            <div className="doughnut-chart">
                <h5>Open Position By Department</h5>
                <Doughnut data={chartdata} options={{
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: false
                    }
                }} />
            </div>
        </>
    )
}

export default Doughnut_chart
