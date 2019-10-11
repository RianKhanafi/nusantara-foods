import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import rupiahFormat from 'rupiah-format'

class Chart extends Component {
    render() {
        console.log(this.props.handelChart)
        let ma = []
        this.props.handelChart.forEach(item => {
            ma.push(item.amountcount)
        })
        // get day
        let day = []
        this.props.handelChart.forEach(days => {
            day.push(days.dayname)
        })
        // console.log(day);
        let month = []
        this.props.handelChart.forEach(moon => {
            month.push(moon.monthname)
        })
        // console.log(month);
        let years = []
        this.props.handelChart.forEach(year => {
            years.push(year.year)
        })
        console.log(years);
        // console.log(day);
        // console.log(ma);
        // const element = []
        // let hr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        // for (let i = 0; i < day.length; i++) {
        //     //    if(day[i] === i){
        //     // console.log(hr[i]);
        //     console.log(hr[2]);
        //     //    }
        // }
        // console.log(element);


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
                    data: ma
                }, {
                    label: 'This ' + this.props.handleOrder,
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: 'rgb(255, 184, 198,0.3)',
                    borderColor: '#ffb8c6',
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
                    data: [100000, 800000, 50000]
                }
                // SELECT *,SUM(amount),DAYOFWEEK(date), DAYNAME(date), EXTRACT(WEEK FROM date) AS day FROM history GROUP BY day
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