import React from 'react'
import QrReader from 'react-qr-reader'
import {Link} from 'react-router-dom'

class Scanner extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            delay: 300,
            result: "No result"
        }
        this.handleScan = this.handleScan.bind(this)
        this.handleError = this.handleError.bind(this)
    }

    handleScan(data) {
        if (data) {
            this.setState({result: data})
        }
    }
    handleError(err) {
        console.log(err)
    }

    render() {
        return(
            <div className="Scanner p-4">
                <h3 className="font-weight-light">Scan new receipt</h3>
                <QrReader
                    delay={this.state.delay}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{width: '100%'}}
                />
                <p>For testing only:</p>
                <Link to='/confirm/0' className='btn btn-primary'>gongcha</Link>
                <Link to='/confirm/1' className='btn btn-primary'>harry's</Link>
            </div>
        )
    }
}
export default Scanner