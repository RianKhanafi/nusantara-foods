import React, { Component } from 'react'
import rupiahFormat from 'rupiah-format'

class CardRevenue extends Component {

    render() {
        return (

            <div className="row">
                <div className="col-md-4">
                    <div class="card card-income">
                        <div class="card-body card-one">
                            <a href="#" class="card-link">Today's Income</a>
                            <h2 class="card-title mb-0">{rupiahFormat.convert(this.props.handleCountOrder)}</h2>
                            <a href="#" class="card-link">{this.props.handleGrowth}% Yesterday</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card card-income">
                        <div class="card-body card-two">
                            <a href="#" class="card-link">Orders</a>
                            <h2 class="card-title mb-0">{this.props.handleOrder}</h2>
                            <a href="#" class="card-link">+{this.props.handlegowCount}% in this week</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card card-income">
                        <div class="card-body card-three">
                            <a href="#" class="card-link">This Year's Income</a>
                            <h2 class="card-title mb-0">{rupiahFormat.convert(this.props.handleresYearIncome)}</h2>
                            <a href="#" class="card-link">+{this.props.handleYearCount}%</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardRevenue