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
                data: [10, 20, 30],
                backgroundColor: [
                    '#36a2eb',
                    '#cc65fe',
                    '#ffce56'
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
