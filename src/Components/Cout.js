import React, { Component } from 'react'
import axios from 'axios'
export default class Cout extends Component {

    handleCout = async (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        let dat = []
        data.forEach(hsl => {
            dat = [hsl]
        })
        console.log(dat[0])
        // await axios.post('http://localhost:5000/api/v.0.1/products/reduce', data)
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }

    render() {
        const { cartItem } = this.props
        return (
            <div>
                <div class="modal fade" id="CoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Checkout</h5>
                                {/* <strong class="mt-1 ml-auto">Receipt no #00929830</strong> */}
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <table>
                                    {cartItem.map(item => (
                                        <tr>
                                            <td width="300"><strong>{item.name}</strong></td>
                                            <td width="100"><strong>{item.count}</strong></td>
                                            <td><strong>{item.price}</strong></td>
                                            <td></td>
                                        </tr>
                                    ))}
                                </table>
                                <table>
                                    <td></td>
                                    <td><strong>Total</strong>{cartItem.reduce((a, c) => (a + c.price * c.count), 0)},-</td>
                                </table>

                            </div>
                            <div class="modal-footer">
                                <form onSubmit={this.handleCout}>
                                    {cartItem.map(item => (
                                        <div>
                                            <input type="text" name="quantity" value={item.count} />
                                            <input type="text" name="id" value={item.id} />
                                        </div>
                                    ))}
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button class="btn btn-primary">Save changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

}