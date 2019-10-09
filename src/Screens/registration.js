import React, { Component } from 'react'
// import axios from 'axios'
import bg from '../Image/bg-log.jpg'
class registration extends Component {

    handleSignup(event) {
        event.preventDefault()
        const data = new FormData(event.target)
        fetch('http://localhost:5000/api/v.0.1/registration', {
            method: "POST",
            body: data
        }).then(res => {
            console.log(res)
        })
            .catch(err => {
                console.log(err)
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
                            <h2 class="text-center text-login">Sign-up</h2>
                            <form method="POST" onSubmit={this.handleSignup}>
                                <div>
                                    <div class="form-group">
                                        <input type="text" placeholder="name" name="name" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="email" name="email" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="password" name="password" class="form-control" />
                                    </div>
                                    <input type="submit" class="btn btn-primary w-100" value="Sign-up" />
                                    <a href={'/signin'} class="btn btn-outline-primary w-100 mt-1">Sign in</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default registration
{/* <div className="col-md-5">
<img src={bg} height="40" />
</div>
<div className="col-md-5 m-5">
<div class="card">
    <h5 class="card-header">Login</h5>
    <div class="card-body">
        <form>
            <div className="form-group">
                <label>Email</label>
                <input type="text" name="email" className="form-control" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="text" name="email" className="form-control" />
            </div>
            <input type="submit" value="Login" className="btn btn-primary" />
        </form>
    </div>
</div>
</div> */}