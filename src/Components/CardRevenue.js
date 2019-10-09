import React, { Component } from 'react'

class CardRevenue extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div class="card card-income">
                        <div class="card-body card-one">
                            <a href="#" class="card-link">Today's Income</a>
                            <h2 class="card-title mb-0">Rp. 1000.000</h2>
                            <a href="#" class="card-link">+2% Yesterday</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card card-income">
                        <div class="card-body card-two">
                            <a href="#" class="card-link">Today's Income</a>
                            <h2 class="card-title mb-0">Rp. 1000.000</h2>
                            <a href="#" class="card-link">+2% Yesterday</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card card-income">
                        <div class="card-body card-three">
                            <a href="#" class="card-link">Today's Income</a>
                            <h2 class="card-title mb-0">Rp. 1000.000</h2>
                            <a href="#" class="card-link">+2% Yesterday</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardRevenue