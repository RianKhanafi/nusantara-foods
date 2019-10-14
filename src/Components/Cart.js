import React, { Component } from 'react'
import Oops from '../Image/oops.png'
import rupiahFormat from 'rupiah-format'



class Cart extends Component {
    render() {

        const { cartItem } = this.props

        return (
            <div>
                <div style={{ minHeight: "300px", overflowX: "hidden", borderRadius: "20px" }}>
                    {cartItem.length > 0 ? (
                        cartItem.map(item =>
                            <div className="row bg-white mb-2 pt-2 pl-2">
                                <div className="col-md-6 overflow-hidden">
                                    <img src={'http://localhost:5000/images/' + item.image} height="80" style={{ borderRadius: '20px' }} className="mt-1" />
                                </div>
                                <div className="col-md-6">
                                    <div className="row" style={{ marginLeft: "2px" }} >
                                        <div className="col-md-12 m-0 p-0">
                                            <h6>{item.name}</h6>
                                        </div>
                                        <div classname="col-md-12 m-0">
                                            <table>
                                                <tr>
                                                    <td> <a className="btn-link" href="#" onClick={() => item.count <= 0 ? this.false : item.count -= 1}><i class="fa fa-angle-down fa-2x"></i></a></td>
                                                    <td width="30" class="text-center"><h6>{item.count}</h6></td>
                                                    <td> <a className="btn-link" href="#" onClick={() => item.count >= item.quantity ? this.false : item.count += 1}  ><i className="fa fa-angle-up fa-2x"></i></a></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="col-md-12  m-0 p-0">
                                            <p> {rupiahFormat.convert(item.price * item.count)}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    ) : (<h1><img src={Oops} width="300" className="empty-image" /></h1>)}
                </div>
                <div className="mt-5">
                    <strong>Total : </strong>{rupiahFormat.convert(cartItem.reduce((a, c) => (a + c.price * c.count), 0))}
                    <br />
                    <small>*Belum termasuk ppn 10%</small>
                    <input type="submit" value="check out" className="btn btn-primary cout w-100" data-toggle="modal" data-target="#CoutModal" /> <br />
                    <input type="submit" value="cancel" className="btn btn-outline-danger mt-1 coutcncl w-100" onClick={(e) => this.props.handleRemoveFromcart(e, cartItem)} />
                </div>
            </div >
        )
    }

}

export default Cart