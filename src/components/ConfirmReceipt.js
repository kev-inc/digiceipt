import React from 'react'
import Receipt from './Receipt'
import {receipts} from '../mockdata/receipts'
import {Link} from 'react-router-dom'

function added() {
    alert("Receipt successfully added!");
}

const ConfirmReceipt = props => (
    <div className="ConfirmReceipt p-4 container">
        <h3 className="font-weight-light">Add this receipt?</h3>
        <div className='shadow-sm mb-4 p-4'>
            <Receipt receipt={receipts[props.match.params.receiptId]}></Receipt>
        </div>
        <div className="row">
            <Link className="btn btn-secondary m-2 col" to='/scan'>Cancel</Link>
            <Link className="btn btn-success m-2 col" onClick={()=>added()} to='/history'>Add</Link>
        </div>
    </div>
)

export default ConfirmReceipt