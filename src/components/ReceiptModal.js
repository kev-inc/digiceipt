import React from 'react'
import Receipt from './Receipt'
import {receipts} from '../mockdata/receipts'
import { Link } from 'react-router-dom'

function success() {
    alert('Added!')
}

const ReceiptModal = (props) => (
    <div className="modal show" style={{display: `${props.showModal ? 'block' : 'none'}`, backgroundColor: '#00000066'}}>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add this receipt?</h5>
                    <button type="button" className="close" onClick={props.closeModal}>
                    <span>&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <Receipt receipt={receipts[props.receiptSelected]}/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={props.closeModal}>Cancel</button>
                    <Link onClick={success} to='/history' className="btn btn-success">Add receipt</Link>
                </div>
            </div>
        </div>
    </div>
)

export default ReceiptModal