import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => (
    <div className="Login m-4">
        <div className="h3 mb-3">Log in to Digiceipt</div>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Email Address" />
        </div>
        <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Password" />
        </div>
        <Link className="btn btn-success btn-lg" to='/home'>Log in</Link>
        <p>Just click on log in don't need to enter anything</p>
    </div>
)

export default Login