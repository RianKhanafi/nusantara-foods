import React, { Component } from 'react'

export default class modal extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = async (event) => {
        // event.preventDefault()
        const data = new FormData(event.target)

        fetch("http://localhost:5000/api/v.0.1/products",
            {
                method: "POST",
                body: data
            })
        // window.location.href = '/home'
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <div className="modal fade" id="addData" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-primary" id="exampleModalLabel">Add Item</h5>
                                <button type="button" className="close text-danger" data-dismiss="modal" aria-label="Close">
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
                                            <input type="text" name="name" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <label>Desciption</label>
                                    </div>
                                    <div className="col-md-10">
                                        <div class="form-group">
                                            <textarea name="description" class="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <label>Image</label>
                                    </div>
                                    <div className="col-md-10">
                                        <div class="form-group">
                                            <input type="file" name="image" class="form-control-file" id="image" />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <label>Category</label>
                                    </div>
                                    <div className="col-md-10">
                                        <div class="form-group">
                                            <select className="form-control" name="id_category">
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
                                            <input type="text" name="price" class="form-control" id="exampleFormControlFile1" />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <label>Quantity</label>
                                    </div>
                                    <div className="col-md-10">
                                        <div class="form-group">
                                            <input type="text" name="quantity" class="form-control" id="exampleFormControlFile1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* hidden input */}
                            <input type="hidden" name="updated" />
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Cancel</button>
                                <button className=" btn btn-primary w-100" >Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        )
    }
}
