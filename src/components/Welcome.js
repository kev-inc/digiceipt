import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = (props) => (
    <div className="Welcome p-4">
        <div className="welcome m-2">
            <h3>Welcome to Digiceipt!</h3>
            <h4 className="font-weight-light text-muted">Your one stop for all your receipts!</h4>
        </div>
        <hr/>
        <div className="actions m-2">
            <Link className="btn btn-primary btn-lg m-2" to='/login'><i className="fas fa-play-circle"></i> Get started</Link><br/>
        </div>
    </div>
)

export default Welcome