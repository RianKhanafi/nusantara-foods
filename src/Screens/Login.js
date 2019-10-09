import React, { Component } from 'react'
import axios from 'axios'
import bg from '../Image/bg-log.jpg'
import ls from 'local-storage'


class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleLogin = async (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        console.log(data);
        await axios.post('http://localhost:5000/api/v.0.1/registration/login', data)
            .then(res => {
                // console.log(res.data.name);
                ls.set('token', res.data.token);
                ls.set('username', res.data.name)
                localStorage.setItem('token', `Bearer ${res.data.token}`)
                // ls.set('Authorization', `Bearer ${ res.data.token}`)
                // this.setState({
                //     buttonDisabled: true,
                //     message: 'login success'
                // })
                console.log(ls.get('username'));
                // window.location.href = '/home'
            })

            .catch(err => {
                console.log(err)
                alert('Error Loading in please try again')
            })
    }



    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center mt-5 login">
                        <div className="col-md-4 log-left">
                            <img src={bg} width="700" />
                        </div>
                        <div className="col-md-4 log-right">
                            <h2 class="text-center text-login">Sign-in</h2>
                            <form onSubmit={this.handleLogin}>
                                <div>
                                    <div class="form-group">
                                        <input type="text" placeholder="email" name="email" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="password" name="password" class="form-control" />
                                    </div>
                                    <input type="submit" class="btn btn-primary w-100" value="Sign-in" />
                                    <a href={'/signup'} class="btn btn-outline-danger w-100 mt-1">Sign up</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default login 