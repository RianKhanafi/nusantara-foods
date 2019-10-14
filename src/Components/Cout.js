import React, { Component } from 'react'
import axios from 'axios'
import rupiahFormat from 'rupiah-format'
import ls from 'local-storage'
import Http from '../Http/Http'

export default class Cout extends Component {

    handleCout = async (event) => {
        event.preventDefault()
        const data = new FormData(event.target)

        await Http.post('/products/reduce', data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        // variabel insert to History

        const { cartItem } = this.props
        const buyer = ls.get('username')

        return (
            <div>
                <div className="modal fade" id="CoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-primary" id="exampleModalLabel">Checkout</h5>
                                <br />
                                <button type="button" className="close text-danger" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table>
                                    <thead>
                                        {cartItem.map(item => (
                                            <tr>
                                                <td width="250"><strong>{item.name}</strong></td>
                                                <td width="100"><strong>{item.count}</strong></td>
                                                <td><strong>{rupiahFormat.convert(item.price)}</strong></td>
                                            </tr>
                                        ))}
                                    </thead>
                                </table>
                                <table>
                                    <thead>
                                        <tr>
                                            <td width="350"><strong>Ppn 10%</strong></td>
                                            <td><strong>{rupiahFormat.convert(cartItem.reduce((a, c) => (a + c.price * c.count * 0.1), 0))}</strong></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="350"><strong>Total: </strong></td>
                                            <td>
                                                <strong>{rupiahFormat.convert((cartItem.reduce((a, c) => (a + c.price * c.count + c.price * c.count * 0.1), 0)))}</strong>
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <form onSubmit={this.handleCout}>
                                <input type="hidden" name="buyer" value={buyer} />
                                <input type="hidden" name="amount" value={cartItem.reduce((a, c) => (a + c.price * c.count + c.price * c.count * 0.1), 0)} />
                                {cartItem.map(item => (
                                    <div>
                                        <input type="hidden" name="ordername" value={item.name} />
                                        <input type="hidden" name="quantity" value={item.count} />
                                        <input type="hidden" name="id" value={item.id} />
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