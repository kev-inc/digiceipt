import React from 'react'
import Receipt from './Receipt'
import {receipts} from '../mockdata/receipts'
import {Link} from 'react-router-dom'

const ViewReceipt = props => (
    <div className="ViewReceipt p-4">
        <div className='shadow-sm mb-4 p-4'>
            <Receipt receipt={receipts[props.match.params.receiptId]}></Receipt>
        </div>
        <Link className="btn btn-danger btn-block" to='/history'>Back</Link>
    </div>
)

export default ViewReceipt