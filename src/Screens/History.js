import React, { Component } from 'react'
import Navigations from '../Components/Navigations'
import axios from 'axios'
// import component
import Chart from '../Components/Chart'
import RecentOrder from '../Components/RecentOrder'
import CardRevenue from '../Components/CardRevenue'
class History extends Component {
    constructor(props) {
        super()
        this.state = {
            data: [],
            order: [],
            count: 0,
            orders: 0,
            resYearIncome: 0
        }
        this.getRecentOrder = this.getRecentOrder.bind(this)
        // this.handleOrder = this.handleOrder.bind(this)
    }
    async componentDidMount() {
        await this.getRecent()
        await this.getCountOrder()
        this.getStartRecentOrder()
        // this.getRecentOrder()
        // console.log('ComponentDidMount', this.state.data)
    }
    getRecent = async () => {
        axios.get('http://localhost:5000/api/v.0.1/recentorder')
            .then(result => {
                console.log(result)
                this.setState({
                    data: [result.data.data]
                })
            })
    }
    // getRecent = async () => {
    //     axios.get('http://localhost:5000/api/v.0.1/recentorder')
    //         .then(result => {
    //             // console.log(result)
    //             this.setState({
    //                 data: result.data.data
    //             })
    //         })
    // }
    getCountOrder = async () => {
        // console.log('err')
        axios.get('http://localhost:5000/api/v.0.1/countorders')
            .then(result => {
                // console.log(result.data.data.rcAmount[0].countAmount)
                // console.log(result.data.data.resYearIncome[0].countAmount)
                this.setState({
                    count: result.data.data.rcAmount[0].countAmount,
                    orders: result.data.data.resCount[0].idRecent,
                    resYearIncome: result.data.data.resYearIncome[0].countAmount
                })
            }).catch(err => {
                console.log(err)
            })
    }
    getStartRecentOrder = async () => {
        axios.get('http://localhost:5000/api/v.0.1/recentorder?order=week')
            .then(result => {
                this.setState({ data: result.data.data })
            })

    }
    getRecentOrder = async (event) => {
        // let data = 'week'
        let data = event.target.value
        axios.get('http://localhost:5000/api/v.0.1/recentorder?order=' + data)
            .then(result => {
                this.setState({
                    data: result.data.data,
                    order: data
                })
            })
    }

    render() {
        // console.log(this.state.order)
        return (
            <div> <Navigations />
                {/* <input class="form-control mr-sm-2" value={this.state.search} onChange={this.updateSearch.bind(this)} type="search" placeholder="Search" aria-label="Search" /> */}
                <div className="row">
                    <div className="col-md-1 sidebar text-center">
                        <ul className="list-group list-group-flush mt-2">
                            <li className="list-group-item mb-2  border-0" ><span className="fa fa-cutlery fa-2x text-dark"></span></li>
                            <li className="list-group-item  mb-2  border-0"><span className="fa fa-list fa-2x text-dark"></span></li>
                            <li className="list-group-item  mb-2  border-0" data-toggle="modal" data-target="#addData"><span className="fa fa-plus fa-2x text-dark"></span></li>
                            <li className="list-group-item  mb-2  border-0"><a href="#"><span className="fa fa-sign-out fa-2x text-dark" onClick={this.handleLogout}></span></a></li>
                        </ul>
                    </div>
                    <div className="col-md-11">
                        <div class="row  mt-3">
                            <div className="col-md-3 pt-2">
                            </div>
                            <div className="col-md-3 pt-2">
                            </div>
                            <div className="col-md-5">
                            </div>
                        </div>
                        <div className="container">
                            <CardRevenue handleCardRevenue={this.state.data} handleCountOrder={this.state.count} handleOrder={this.state.orders} handleresYearIncome={this.state.resYearIncome} />
                        </div>

                        {/* chart */}
                        <div className="container">
                            <div className="row row-cart">
                                <div className="col-md-10">
                                    <h1 className="p-2">Revenue</h1>
                                </div>
                                <div className="col">
                                    <select class="form-control fm-revenue form-control-sm mr-2 mt-2" onChange={(event) => this.getRecentOrder(event)}>
                                        <option value="week">Weekly</option>
                                        <option value="month">Monthly</option>
                                        <option value="year">Year</option>
                                    </select>
                                </div>
                                {/* <div className="col">
                                </div> */}
                                <div className="col-md-12">
                                    <Chart handelChart={this.state.data} handleOrder={this.state.order} />
                                </div>
                            </div>
                        </div>


                        {/* Recent Order */}

                        <div className="container">
                            <RecentOrder recentOrder={this.state.data} getRecentOrder={this.getRecentOrder} />
                        </div>
                    </div>
                </div>

                {/* <Modal />
<Cout cartItem={this.state.cartItem} /> */}

            </div >
        )
    }
}

export default History