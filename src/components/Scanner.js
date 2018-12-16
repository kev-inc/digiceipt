import React from 'react'
import ReceiptModal from './ReceiptModal'

class Scanner extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            receiptSelected: 0
        }
    }

    openModal (receiptId) {
        console.log(this.state.showModal)
        this.setState({showModal: true, receiptSelected: receiptId})
    }

    closeModal = () => {
        this.setState({showModal:false})
    }
    render() {
        return(
            <div className="Scanner">
                <div className="h3">Scanner page</div> 
                <button className="btn btn-primary" onClick={() => this.openModal(0)}>gongcha</button>
                <button className="btn btn-warning" onClick={() => this.openModal(1)}>harry's</button>
                <ReceiptModal receiptSelected={this.state.receiptSelected} closeModal={this.closeModal} showModal={this.state.showModal} openModal={this.openModal}/>
            </div>
        )
    }
}
export default Scanner