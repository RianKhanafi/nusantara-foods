import React, { Component } from 'react'
import rupiahFormat from 'rupiah-format'

class RecentOrder extends Component {

    render() {
        const getTime = new Date()
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        return (
            <div>
                <div className="row row-cart">
                    <div className="col-md-9 pt-3 pb-3">
                        <h1>Recent Order</h1>
                    </div>
                    <div className="col-md-3  pt-3 pb-3">
                        <select class="form-control fm-revenue form-control-sm mr-2 mt-2">
                            <option>Week</option>
                            <option>Month</option>
                            <option>Year</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">INVOICES</th>
                                    <th scope="col">CUSTOMERS</th>
                                    <th scope="col">DATE</th>
                                    <th scope="col">ORDERS</th>
                                    <th scope="col">AMOUNT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.recentOrder.map(item => (
                                    <tr>
                                        <th scope="row">#{item.idRecent}</th>
                                        <td>{item.buyer}</td>
                                        <td>{getTime.getDate(item.date) + ' ' + monthNames[getTime.getMonth(item.date)] + ' ' + getTime.getFullYear(item.date)}</td>
                                        <td>{item.orders}</td>
                                        <td>{rupiahFormat.convert(item.amount)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecentOrder