import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'font-awesome/css/font-awesome.min.css';
import Axios from 'axios';

class Navigations extends Component {
    // constructor(props) {
    //     super()
    //     this.state = { data: [] };

    // }

    // searchvalue(e) {
    //     let value = e.target.value
    //     this.getSearch(value)
    // }

    // getSearch = async (value) => {
    //     await Axios.get('http://localhost:5000/api/v.0.1/products?search=' + value)
    //         .then((result) => {
    //             console.log(result.data.data)
    //             this.setState({ data: result.data.data })
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    render() {
        return (
            <div className="row">
                <div className="col-md-9  mr-0 pr-0">
                    <nav className="navbar navbar-light bg-nav">
                        <button className="navbar-toggler" id="side-toggle" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand">Nusantara Food</a>
                        <form className="form-inline">
                            {/* <input type="search" onKeyPress={(e) => this.searchvalue(e)} class="form-control" /> */}
                            <span className="fa fa-search"></span>
                        </form>
                    </nav>
                </div>
                <div className="col-md-3  ml-0 pl-0">
                    <nav className="navbar navbar-light bg-nav cart">
                        <p className="navbar-brand m-auto">Cart <span className="badge badge-primary">{}</span></p>
                    </nav>
                </div>
            </div>
        )
    }

}

export default Navigations