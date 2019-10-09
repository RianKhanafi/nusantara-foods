import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import rupiahFormat from 'rupiah-format'

class Chart extends Component {
    render() {
        let am = []
        this.props.handelChart.forEach(item => {
            am.push(item.amount)
        })
        let total = 0
        for (let i = 0; i < am.length; i++) {
            total += am[i]
        }
        const data = {
            labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu', 'Minggu'],
            datasets: [
                {
                    label: 'This Month',
                    fill: false,
                    lineTension: 0.1,
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
                    data: [10000, 250000, total]
                }
                // , {
                //     label: 'Year',
                //     fill: false,
                //     lineTension: 0.1,
                //     backgroundColor: 'rgb(255, 184, 198,0.3)',
                //     borderColor: '#ffb8c6',
                //     borderCapStyle: 'butt',
                //     borderDash: [],
                //     borderDashOffset: 0.0,
                //     borderJoinStyle: 'miter',
                //     pointBorderColor: 'rgba(75,192,192,1)',
                //     pointBackgroundColor: '#fff',
                //     pointBorderWidth: 1,
                //     pointHoverRadius: 5,
                //     pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                //     pointHoverBorderColor: 'rgba(220,220,220,1)',
                //     pointHoverBorderWidth: 2,
                //     pointRadius: 1,
                //     pointHitRadius: 10,
                //     data: [10, 20, 10, 20, 60, 60, 30]
                // }
            ]
        };
        return (
            <div>
                <Line data={data} />
            </div>
        )
    }
}

export default Chart