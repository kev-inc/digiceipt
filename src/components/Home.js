import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => (
    <div className="Home container">
        <div className="welcome m-3 p-3 shadow-sm bg-primary text-light">
            <h4>Welcome back,<br/>Kevin</h4>
        </div>
        <div className="actions m-2 row">
            <Link className="shadow-sm btn bg-success col p-2 m-2 text-light" to='/scan'><i className="fas fa-qrcode"></i><br/>Add new receipt</Link>
            <Link className="shadow-sm btn bg-warning col p-2 m-2 text-light" to='/history'><i className="fas fa-history"></i><br/>View previous receipts</Link>
        </div>
    </div>
)

export default Home