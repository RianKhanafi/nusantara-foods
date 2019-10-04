import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            // {`${this.props.count()} Products Found.`    }
            <div className="row">
                <div classhandleSortChangeName="col-md-4"> </div>
                <div className="col-md-4">
                    <label>
                        {this.props.children}
                        <select className="form-control" value={this.props.sort} onChange={this.props.handleChangeSort}>
                            <option value="">Select</option>
                            <option value="food">Food</option>
                            <option value="fast food">highest to lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4"> </div>
            </div>
        )
    }
}