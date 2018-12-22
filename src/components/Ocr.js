import React from 'react'
import Webcam from 'react-webcam'
// import tesseract from 'node-tesseract-ocr'
// import receipt from '../mockdata/r.jpg'

class Ocr extends React.Component {

    constructor() {
        super()
        this.state = {
            ocrState:"",
            percentCompleted: 0,
            result: "",
            url: "",
        }
    }

    componentDidMount () {
        
    }

    setRef = webcam => {
        this.webcam = webcam
    }

    capture = () => {
        const imageSrc = this.webcam.getScreenshot()
        this.scanPicture(imageSrc)
    }

    scanPicture(picture) {
        let tesseract = window.Tesseract
        console.log(tesseract)
        tesseract.recognize("picture", {
            lang: 'eng'
        })
            .progress(message => {
                this.setState({ocrState: message.status})
                if(message.status === "recognizing text") {
                    this.setState({percentCompleted: message.progress})
                }
                console.log("% completed: ", message)
            })
            .then(result => {
                console.log(result)
                this.setState({result: result.text})
            })
    }

    onScan = () => {
        let tesseract = window.Tesseract
        console.log(tesseract)
        tesseract.recognize("https://cors-anywhere.herokuapp.com/" + this.state.url, {
            lang: 'eng'
        })
            .progress(message => {
                this.setState({ocrState: message.status})
                if(message.status === "recognizing text") {
                    this.setState({percentCompleted: message.progress})
                }
                console.log("% completed: ", message)
            })
            .then(result => {
                console.log(result)
                this.setState({result: result.text})
            })
    }

    onInputChange = event => {
        this.setState({url: event.target.value})
    }

    render() {
        const videoConstraints = {
            facingMode: {exact: "environment"}
        }
        return(
            <div className='Ocr p-4'>
                <Webcam 
                    audio={false} 
                    ref={this.setRef} 
                    screenshotFormat="image/jpeg"
                    ></Webcam>
                <button className="btn btn-success" onClick={this.capture}>Capture</button>
                <div className="url">
                    <div className="input-group mb-3">
                        <input type="text" placeholder="url" className="form-control" value={this.state.url} onChange={this.onInputChange}/>
                        <div className="input-group-append">
                            <button className="btn btn-secondary" onClick={this.onScan}>Scan</button>
                        </div>
                    </div>
                </div>
                <div className="status">
                    <span>{this.state.ocrState.toLocaleUpperCase()}</span>
                </div>
                <div className="progress">
                    <div className="progress-bar" style={{width: `${this.state.percentCompleted*100}%`}}></div>
                </div>
                <div className="result">
                    <pre>
                        {this.state.result}
                    </pre>
                </div>

            </div>
        )
    }
}

export default Ocr