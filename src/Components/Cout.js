import React, { Component } from 'react'
import axios from 'axios'
import rupiahFormat from 'rupiah-format'
import ls from 'local-storage'

export default class Cout extends Component {
    //getUserLogin

    handleCout = async (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        // console.log(data)
        await axios.post('http://localhost:5000/api/v.0.1/products/reduce', data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { cartItem } = this.props
        const buyer = ls.get('username')
        return (
            <div>
                <div className="modal fade" id="CoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-primary" id="exampleModalLabel">Checkout</h5>
                                <br />
                                <button type="button" className="close text-danger" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            {/* <div className="modal-content border-0">
                                <div className="modal-header">Casier : pevita pearce</div>
                                <div className="modal-header">Receipt no : #010000293</div>
                            </div> */}
                            <div className="modal-body">
                                <table>
                                    {cartItem.map(item => (
                                        <tr>
                                            <td width="250"><strong>{item.name}</strong></td>
                                            <td width="100"><strong>{item.count}</strong></td>
                                            <td><strong>{rupiahFormat.convert(item.price)}</strong></td>
                                        </tr>
                                    ))}
                                </table>
                                <table>
                                    <tr>
                                        <td width="350"><strong>Ppn 10%</strong></td>
                                        <td><strong>{rupiahFormat.convert(cartItem.reduce((a, c) => (a + c.price * c.count * 0.1), 0))}</strong></td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td width="350"><strong>Total: </strong></td>
                                        <td>
                                            <strong>{rupiahFormat.convert((cartItem.reduce((a, c) => (a + c.price * c.count + c.price * c.count * 0.1), 0)))}</strong>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <form onSubmit={this.handleCout}>
                                <input type="hidden" name="buyer" value={buyer} />
                                <input type="hidden" name="amount" value={cartItem.reduce((a, c) => (a + c.price * c.count + c.price * c.count * 0.1), 0)} />
                                {cartItem.map(item => (
                                    <div>
                                        <input type="text" name="ordername" value={item.name} />
                                        <input type="text" name="quantity" value={item.count} />
                                        <input type="text" name="id" value={item.id} />
                                    </div>
                                ))}
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Cancel</button>
                                    <button className="btn btn-primary w-100">Checkout</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}