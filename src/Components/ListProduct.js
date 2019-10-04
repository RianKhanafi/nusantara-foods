import React, { Component } from 'react'
import axios from 'axios'

export default class ProductList extends Component {

    constructor(props) {
        super()
        this.state = {
            data: [],
            id: '',
            name: '',
            description: '',
            image: '',
            id_category: '',
            price: '',
            quantity: ''
        }
        this.handleDelete = this.handleDelete.bind(this)


    }
    getUpdate = async (data) => {
        await axios.get("http://localhost:5000/api/v.0.1/products/" + data)
            .then(result => {
                console.log(result)
                this.setState({
                    data: result.data.data[0],
                    id: result.data.data[0].id,
                    name: result.data.data[0].name,
                    description: result.data.data[0].description,
                    image: result.data.data[0].image,
                    id_category: result.data.data[0].id_category,
                    price: result.data.data[0].price,
                    quantity: result.data.data[0].quantity
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    handleUpdate = async (event, id) => {
        event.preventDefault()
        const data = new FormData(event.target)
        fetch("http://localhost:5000/api/v.0.1/products?id=" + id, {
            method: "PUT",
            body: data
        })
    }
    handleDelete = async (data) => {
        fetch("http://localhost:5000/api/v.0.1/products?id=" + data, { method: "DELETE" });
    }
    inponChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const modal = (
            <form onSubmit={(e) => this.handleUpdate(e, this.state.id)} >
                <div className="modal fade" id="updtData" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Update Item</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-2">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-10">
                                        <div class="form-group">
                                            <input type="text" value={this.state.name} name="name" className="form-control" onChange={this.inponChangeHandler} />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <label>Desciption</label>
                                    </div>
                                    <div className="col-md-10">
                                        <div class="form-group">
                                            <textarea name="description" class="form-control" value={this.state.description} onChange={this.inponChangeHandler}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <label>Image</label>
                                    </div>
                                    <div className="col-md-10">
                                        <div class="form-group">
                                            <input type="text" name="image" value={this.state.image} class="form-control-file" id="image" onChange={this.inponChangeHandler} />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <label>Category</label>
                                    </div>
                                    <div className="col-md-10">
                                        <div class="form-group">
                                            <select className="form-control" name="id_category" onChange={this.inponChangeHandler}>
                                                <option value={this.state.id_category}></option>
                                                <option value="5">Food</option>
                                                <option value="4">Fast Food</option>
                                                <option value="3">Drink</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <label>Price</label>
                                    </div>
                                    <div className="col-md-10">
                                        <div class="form-group">
                                            <input type="text" name="price" value={this.state.price} class="form-control" id="exampleFormControlFile1" onChange={this.inponChangeHandler} />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <label>Quantity</label>
                                    </div>
                                    <div className="col-md-10">
                                        <div class="form-group">
                                            <input type="text" name="quantity" value={this.state.quantity} class="form-control" id="exampleFormControlFile1" onChange={this.inponChangeHandler} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* hidden input */}
                            <input type="hidden" name="updated" />
                            <input type="hidden" value={this.state.id} name="id" className="form-control" onChange={this.inponChangeHandler} />
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancle</button>
                                <button className=" btn btn-primary" >Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )


        const ProductList = this.props.products.map(item => (
            <div className="col-md-4 col-sm-8 col-xs-12 mb-2">
                {/* <a href={`#${item.id}`} className="text-dark" onClick={(e) => this.props.handleAddtoCart}   > */}
                <div className="card">
                    <div className="card-img">
                        <img src={'http://localhost:5000/images/' + item.image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                        <div class="delete float-right">
                            <div class="btn-group dropup">
                                <button type="button" class="btn btn-white dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </button>
                                <div class="dropdown-menu">
                                    <a class="btn-link" onClick={() => this.handleDelete(item.id)}><i class="fa fa-trash fa-2x"></i>Delete</a> <br />
                                    <a class="btn-link" data-toggle="modal"
                                        onClick={(e) => this.getUpdate(item.id)} data-target="#updtData"><i class="fa fa-edit fa-2x"></i>Update</a>
                                </div>
                            </div>
                        </div>
                        <p className="card-text">{item.name}</p>
                        <h5 className="card-title">{item.price}</h5>
                        <button type="submit" className="btn btn-primary w-100" onClick={(e) => this.props.handleAddtoCart(e, item)} >Add to Cart</button>
                    </div>
                </div>
                {/* </a> */}
            </div >
        )
        )
        return (
            <div className="row mt-3" >
                {/* {ProductList.map((item, index) => {
                    return ( */}
                {ProductList}
                {modal}
                {/* )
                })} */}
            </div>
        )
    }
}
