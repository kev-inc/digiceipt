import React from 'react'

const Receipt = (props) => (
    <div className="Receipt">
        <pre>
            <div className="top">
                {props.receipt.shopName}<br/>
                {props.receipt.shopBranch}<br/>
                GST NO: {props.receipt.GST}<br/>
                <br/>
                Pax:{props.receipt.pax} TABLE: {props.receipt.table} <br/>
            </div>
            <hr/>
            <div className="middle text-left">
                {props.receipt.items.map((item, index) => {
                    return <div key={index}>
                        <span>
                            {item.qty} {item.name}
                        </span>
                        <span className="float-right">${item.price.toFixed(2)}</span>
                        {item.optional ? item.optional.map((opt, index) => {
                            return <div key={index}>
                                {opt.desc} <span className='float-right'>${opt.price.toFixed(2)}</span>
                                <br/>
                            </div> 
                        }) : (null)}
                    </div>
                })}
                <hr/>
                SUBTOTAL<span className="float-right">${props.receipt.subtotal.toFixed(2)}</span><br/>
                {props.receipt.svc ? <span>SVC CHG<span className="float-right">${props.receipt.svc.toFixed(2)}</span><br/></span> : (null)}
                {props.receipt.gst ? <span>GST<span className="float-right">${props.receipt.gst.toFixed(2)}</span></span> : (null) }
                <hr/>
                <span className="font-weight-bold">TOTAL<span className="float-right">${props.receipt.total.toFixed(2)}</span></span>
                <hr/>
                <div className="text-center">--- END ---</div>
            </div>
        </pre>
    </div>
)


export default Receipt