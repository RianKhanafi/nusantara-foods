import React, { Component } from 'react'
import Navigations from '../Components/Navigations'
import axios from 'axios'
// import component
import Chart from '../Components/Chart'
import RecentOrder from '../Components/RecentOrder'
import CardRevenue from '../Components/CardRevenue'
// base url
import Http from '../Http/Http'

class History extends Component {
    constructor(props) {
        super()
        this.state = {
            data: [],
            order: [],
            count: 0,
            orders: 0,
            growth: 0,
            resYearIncome: 0,
            recentData: [],
            growthOrdeWeek: 0,
            yearCount: 0
        }
        this.getRecentOrder = this.getRecentOrder.bind(this)
    }
    async componentDidMount() {
        await this.getCountOrder()
        // await this.getValue()
    }

    // Card
    getCountOrder = async () => {
        Http.get('/countorders')
            .then(result => {
                let growthCount = ((result.data.data[0].daynow - result.data.data[0].yesterday) / result.data.data[0].yesterday) * 100
                let gowCount = ((result.data.data[0].weeknow - result.data.data[0].lastweek) / result.data.data[0].lastweek) * 100
                let yearCount = ((result.data.data[0].yearnow - result.data.data[0].yearlast) / result.data.data[0].yearlast * 100)
                this.setState({
                    count: result.data.data[0].daynow,
                    orders: result.data.data[0].dayordernnow,
                    resYearIncome: result.data.data[0].yearnow,
                    growth: growthCount.toFixed(1),
                    growthOrdeWeek: gowCount.toFixed(1),
                    yearCount: yearCount.toFixed(1)
                })
            }).catch(err => {
                console.log(err)
            })
    }

    // grafik
    getRecentOrder = async (event) => {
        let data = event.target.value
        Http.get(`/recentorder?order=${data}`)
            .then(result => {
                this.setState({
                    data: result.data.data,
                    order: data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    // show recent order
    grOrder = async (event) => {
        let data = event.target.value
        Http.get(`/grOrder?order=${data}`)
            .then(result => {
                this.setState({
                    recentData: result.data.data
                })
            })
    }

    render() {

        // card if null
        if (this.state.count === null) {
            this.state.count = 0;
        }

        return (
            <div>
                <div className="row">
                    <div className="col-md-12  mr-0 pr-0">
                        <nav className="navbar navbar-light bg-nav">
                            <button className="navbar-toggler" id="side-toggle" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            </button>
                            <a className="navbar-brand">History</a>
                            <form className="form-inline">
                                <span className="fa fa-search text-white"></span>
                            </form>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1 sidebar text-center">
                        <ul className="list-group list-group-flush mt-2">
                            <li className="list-group-item mb-2  border-0" ><a href='/home'><span className="fa fa-cutlery fa-2x text-dark"></span></a></li>
                            <li className="list-group-item  mb-2  border-0"><a href='/history'><span className="fa fa-history fa-2x text-dark"></span></a></li>
                            <li className="list-group-item  mb-2  border-0"><a href="#"><span className="fa fa-sign-out fa-2x text-dark" onClick={this.handleLogout}></span></a></li>
                        </ul>
                    </div>
                    <div className="col-md-11">
                        <div className="row  mt-3">
                            <div className="col-md-3 pt-2">
                            </div>
                            <div className="col-md-3 pt-2">
                            </div>
                            <div className="col-md-5">
                            </div>
                        </div>
                        <div className="container">
                            <CardRevenue handleCardRevenue={this.state.data} handleGrowth={this.state.growth} handleCountOrder={this.state.count} handleOrder={this.state.orders} handleresYearIncome={this.state.resYearIncome} handlegowCount={this.state.growthOrdeWeek} handleYearCount={this.state.yearCount} />
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
                                <div className="col-md-12">
                                    <Chart handelChart={this.state.data} handleOrder={this.state.order} />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <RecentOrder recentOrder={this.state.recentData} grOrder={this.grOrder} />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default History