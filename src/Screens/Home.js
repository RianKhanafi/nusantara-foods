import React, { Component } from 'react'
import axios from 'axios'
// import $ from 'jquery'


// component
import ProductList from '../Components/ListProduct'
import Navigations from '../Components/Navigations'
import Cart from '../Components/Cart'
import Cout from '../Components/Cout'
// import { stat } from 'fs'
import Modal from '../Components/Modal'
import Filter from '../Components/Filter'

class Menu extends Component {
    constructor(props) {
        super()
        this.state = {
            data: [],
            cartItem: [],
            filterProducts: [],
            clicks: 0,
            limit: 3,
            page: 1
        };
        this.handleAddtoCart = this.handleAddtoCart.bind(this)
    }

    async componentDidMount() {
        await this.getAll()
        console.log('ComponentDidMount', this.state.data)
    }
    getAll = async () => {
        await axios.get('http://localhost:5000/api/v.0.1/products')
            .then((result) => {
                console.log(result.data.data)
                this.setState({ data: result.data.data })
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    handleAddtoCart(e, item) {
        this.setState(state => {
            const cartItem = state.cartItem
            let productAlredyinChart = false
            cartItem.forEach(data => {
                if (data.id === item.id) {
                    productAlredyinChart = true
                    data.count += 1
                }
            })
            if (!productAlredyinChart) {
                cartItem.push({ ...item, count: 1 })
            }
            localStorage.setItem("cartItem", JSON.stringify(cartItem))
            console.log(cartItem)
            return (cartItem)
        })
    }
    searchvalue(e) {
        let value = e.target.value
        this.searchProducts(value)
    }

    sort(e) {
        let sort = e.target.value
        if (sort === 'az') {
            sort = 'asc'
        } else sort = "desc"
        this.searchProducts(sort)
    }


    // searchProducts = async (value) => {
    //     let url
    //     url = 'http://localhost:5000/api/v.0.1/products?search='
    //     if (value === 'desc' || value === 'asc') {
    //         url = 'http://localhost:5000/api/v.0.1/products?sortBy=name&orderBy='
    //     }
    //     await axios.get(url + value)
    //         .then((result) => {
    //             console.log(result.data.data)
    //             this.setState({ data: result.data.data })
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     return
    // }

    handlePrevious = async e => {
        if (this.state.clicks < 1) {
            this.state.clicks = 0;
        }else{
        this.state.clicks = this.state.clicks - 3
        this.state.page = this.state.page - 1
        }
        await this.pagination()
    }
    handleNext = async e => {
        this.state.clicks = this.state.clicks + 3
        this.state.page = this.state.page + 1
        await this.pagination()
    }

    pagination = async (e) => {
        // let pagination = this.state.clicks
        console.log(this.state.clicks);
        console.log(this.state.limit);
        await axios.get("http://localhost:5000/api/v.0.1/products/paginate?page=" + this.state.clicks + "&limit=" + this.state.limit)
            .then(result => {
                this.setState({ data: result.data.data })
            })
            .catch(err => {
                console.log(err);
            })
    }



    render() {
        return (
            <div> <Navigations />
                {/* <input class="form-control mr-sm-2" value={this.state.search} onChange={this.updateSearch.bind(this)} type="search" placeholder="Search" aria-label="Search" /> */}
                <div className="row">
                    <div className="col-md-1 sidebar text-center">
                        <ul className="list-group list-group-flush mt-2">
                            <li className="list-group-item mb-2  border-0" ><span className="fa  fa-cutlery fa-3x"></span></li>
                            <li className="list-group-item  mb-2  border-0"><span className="fa  fa-list fa-3x"></span></li>
                            <li className="list-group-item  mb-2  border-0" data-toggle="modal" data-target="#addData"><span className="fa fa-plus fa-3x"></span></li>
                        </ul>
                    </div>
                    <div className="col-md-8">

                        <div class="row">
                            <div className="col-md-3 pt-2">
                                <input type="search" onKeyPress={(e) => this.searchvalue(e)} class="form-control" placeholder="search name" />
                            </div>
                            <div className="col-md-3 pt-2">
                                <select class="form-control select" onChange={(e) => this.sort(e)}>
                                    <option>Sort name </option>
                                    <option value="az">A-Z</option>
                                    <option value="za">Z-A</option>
                                </select>
                            </div>
                            <div className="col-md-5">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-end">
                                        <button className="page-item  page-link" onClick={this.handlePrevious.bind(this)}> <li class="page-item">Previous</li></button>
                                        <div class="page-item  page-link">{this.state.page}</div>
                                        <button className="page-item page-link" onClick={this.handleNext.bind(this)}> <li class="page-item">Next</li></button>
                                        {/* <button className="page-item page-link" onClick={this.pagination}> <li class="page-item">Sbm</li></button> */}
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        {/* <Filter size={this.state.size} sort={this.state.sort} handleChangeSize={this.handleChangeSize} handleChangeSort={this.handleChangeSort} count={this.state.filterProducts.length} /> */}
                        <ProductList products={this.state.data} handleAddtoCart={this.handleAddtoCart} />
                    </div>
                    <div className="col-md-3 side-right">
                        <div className="jumbotron mr-3 mt-3">
                            <Cart cartItem={this.state.cartItem} handleRemoveFromcart={this.handleRemoveFromcart} />
                        </div>
                    </div>
                </div>

                <Modal />
                <Cout cartItem={this.state.cartItem} />


            </div>
        )
    }
}


// #2d53fe

export default Menu