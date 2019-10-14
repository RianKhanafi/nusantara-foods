import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import rupiahFormat from 'rupiah-format'

class Chart extends Component {
    render() {
        console.log(this.props.handelChart)
        let amCount = []
        this.props.handelChart.forEach(item => {
            amCount.push(item.amountcount)
        })
        // get day
        let day = []
        this.props.handelChart.forEach(days => {
            day.push(days.dayname)
        })

        let month = []
        this.props.handelChart.forEach(moon => {
            month.push(moon.monthname)
        })

        let years = []
        this.props.handelChart.forEach(year => {
            years.push(year.year)
        })
        // let rel = []
        // let now = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        // day.forEach(day => {
        //     now.forEach(now => {
        //         if (day === now) {
        //             rel.push(day)
        //         } else {
        //             rel.push(0)
        //         }
        //     })
        //     console.log(rel)
        //     // console.log(day)
        // })
        // // console.log(rel)


        let date = []
        if (this.props.handleOrder === 'week') {
            date.push(day)
        } else if (this.props.handleOrder === 'month') {
            date.push(month)
        } else {
            date.push(years)
        }

        const data = {
            labels: date[0],
            datasets: [
                {
                    label: 'This ' + this.props.handleOrder,
                    fill: false,
                    lineTension: 0.3,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: amCount
                }
                // }, {
                //     label: 'This ' + this.props.handleOrder,
                //     fill: true,
                //     lineTension: 0.3,
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
                //     data: [100000, 800000, 50000]
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