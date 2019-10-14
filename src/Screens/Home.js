import React, { Component } from 'react'
import axios from 'axios'
import ls from 'local-storage'
import 'font-awesome/css/font-awesome.min.css';
import { connect } from 'react-redux'
import { getAll } from '../public/redux/actions/menu'

// component
import ProductList from '../Components/ListProduct'
import Navigations from '../Components/Navigations'
import Cart from '../Components/Cart'
import Cout from '../Components/Cout'
import Modal from '../Components/Modal'
import Http from '../Http/Http'

class Menu extends Component {
    constructor(props) {
        super()
        this.state = {
            data: [],
            cartItem: [],
            filterProducts: [],
            limit: 3,
            page: 1,
            pages: 0,
            clicks: 0,
            countData: 0
        };
        this.handleAddtoCart = this.handleAddtoCart.bind(this)
    }

    async componentDidMount() {
        await this.getAll()
    }

    async getAll() {
        const fetch = await getAll()
        this.props.dispatch(fetch)
        this.setState({
            data: this.props.products.menuList, // products get from bottom
            pages: this.props.products.pages
        })
    }

    handleAddtoCart(event, item) {
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
            // console.log(cartItem)
            return (cartItem)
        })
    }

    searchvalue(event) {
        let value = event.target.value
        this.searchProducts(value)
    }

    sort(event) {
        let sort = event.target.value
        if (sort === 'az') {
            sort = 'asc'
        } else sort = "desc"
        this.searchProducts(sort)
    }

    searchProducts = async (value) => {
        let url
        url = '/products?search='
        if (value === 'desc' || value === 'asc') {
            url = '/products?sortBy=name&orderBy='
        }
        await Http.get(url + value, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((result) => {
                console.log(result.data.data)
                this.setState({ data: result.data.data })
            })
            .catch(err => {
                console.log(err)
            })
        return
    }

    handlePrevious = async () => {
        if (this.state.limit < 1 && this.state.page < 1) {
            this.state.limit = 0;
            this.state.page = 0;
        } else {
            this.state.clicks = this.state.clicks - 3
            this.state.page = this.state.page - 1
        }
        await this.pagination()
    }

    handleNext = async () => {
        let value = this.state.page
        if (value >= this.state.pages) {
            value = this.state.pages - 1
        } else {
            this.state.clicks = this.state.clicks + 3
            this.state.page = this.state.page + 1
            // console.log(this.state.limit)
            await this.pagination()
        }
    }

    pagination = async () => {
        //console.log(this.state.page)
        await Http.get('/products/paginate?page=' + this.state.clicks + '&limit=' + this.state.limit, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then(result => {
                console.log(result)
                this.setState({ data: result.data.data })
            })
            .catch(err => {
                console.log(err);
            })
    }

    getCountdata = async () => {
        await Http.get('/countproducts')
            .then(response => {
                console.log(response)
                this.setState({ countData: response.data })
            })
    }

    handleLogout = async (event) => {
        event.preventDefault()
        let token = ls.get('token')
        console.log(token);
        if (token === token) {
            ls.remove('token')
            ls.remove('username')
            window.location.href = '/signin'
        }
    }

    render() {
        const token = ls.get('token')
        if (token === null) {
            window.location.href = '/signin'

        } else {
            return (
                <div> <Navigations />
                    <div className="row">
                        <div className="col-md-1 sidebar text-center">
                            <ul className="list-group list-group-flush mt-2">
                                <li className="list-group-item mb-2  border-0" ><span className="fa fa-cutlery fa-2x text-dark"></span></li>
                                <li className="list-group-item  mb-2  border-0"><a href='/history'><span className="fa fa-history fa-2x text-dark"></span></a></li>
                                <li className="list-group-item  mb-2  border-0" data-toggle="modal" data-target="#addData"><span className="fa fa-plus fa-2x text-dark"></span></li>
                                <li className="list-group-item  mb-2  border-0"><a href="#"><span className="fa fa-sign-out fa-2x text-dark" onClick={this.handleLogout}></span></a></li>
                            </ul>
                        </div>
                        <div className="col-md-8">
                            <div className="row mt-3">
                                <div className="col-md-3 pt-2">
                                    <input type="search" onKeyPress={(e) => this.searchvalue(e)} className="form-control" placeholder="search name" />
                                </div>
                                <div className="col-md-3 pt-2">
                                    <select className="form-control select" onChange={(e) => this.sort(e)}>
                                        <option>Sort name </option>
                                        <option value="az">A-Z</option>
                                        <option value="za">Z-A</option>
                                    </select>
                                </div>
                                <div className="col-md-5">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-end">
                                            <button className="page-item page-link" onClick={this.handlePrevious.bind(this)}>Previous</button>
                                            <div className="page-item page-link">{this.state.page}</div>
                                            <button className="page-item page-link" onClick={this.handleNext.bind(this)}> <li className="page-item">Next</li></button>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
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
}

const mapStateToProps = state => {
    return {
        products: state.menuList
    }
}

export default connect(mapStateToProps)(Menu)
// #2d53fe