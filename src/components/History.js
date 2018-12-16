import React from 'react'
import { Link } from 'react-router-dom'
import { receipts } from '../mockdata/receipts'

const History = (props) => (
     <div className="History p-4">
        <h3 className="font-weight-light">Past receipts</h3>
        {receipts.map((item, index) => {
            return <div className="receipts" key={index}>
                <div className='shadow-sm p-3 m-2 text-left'>
                    {item.shopName}
                    <span className="float-right">
                        <Link className="btn btn-light" to={`/view/` + index}>
                            <i className="fas fa-external-link-alt"></i>
                        </Link>
                    </span>
                    <br/>
                    Date issued: {item.date.toLocaleDateString("en-SG")}
                </div>
            </div>
        })}
        
    </div>
)

export default History