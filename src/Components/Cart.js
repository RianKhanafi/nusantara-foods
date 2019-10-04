import React, { Component } from 'react'
export default class Cart extends Component {
    render() {
        const { cartItem } = this.props
        // const CoutData = cartItem.map(item => (

        // ))




        return (


            <div>
                <div style={{ minHeight: "300px", overflowX: "hidden" }}>
                    {cartItem.length >= 1 ? (
                        cartItem.map(item =>
                            <div className="row bg-white mb-2 pt-2 pl-2">
                                <div className="col-md-6 overflow-hidden">
                                    <img src={'http://localhost:5000/images/' + item.image} height="80" style={{ borderRadius: '20px' }} className="mt-1" />
                                </div>
                                <div className="col-md-6">
                                    <div className="row ml-2">
                                        <div className="col-md-12 m-0 p-0">
                                            <h6>{item.name}</h6>
                                        </div>
                                        <div classname="col-md-12 m-0">
                                            <table>
                                                <tr>
                                                    <td> <a className="btn-link" href="#" onClick={() => item.count <= 0 ? this.false : item.count -= 1}><i class="fa fa-angle-down fa-2x"></i></a></td>
                                                    <td width="30" class="text-center"><h6>{item.count}</h6></td>
                                                    <td> <a className="btn-link" href="#" onClick={() => item.count >= item.quantity ? this.false : item.count += 1}  ><i class="fa fa-angle-up fa-2x"></i></a></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="col-md-12  m-0 p-0">
                                            <p> Rp.{item.price * item.count},-</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    ) : (<h1>Your Cart is Empty</h1>)}
                </div>
                <div className="mt-5">
                    <strong>Total : </strong> Rp.{cartItem.reduce((a, c) => (a + c.price * c.count), 0)},-
                    <br />
                    <small>*Belum termasuk ppn</small>
                    <input type="submit" value="check out" class="btn btn-primary w-100" data-toggle="modal" data-target="#CoutModal" /> <br />
                    <input type="submit" value="cancle" class="btn btn-danger w-100" onClick={(e) => this.props.handleRemoveFromcart(e, cartItem)} />
                </div>
            </div>
        )
    }

}