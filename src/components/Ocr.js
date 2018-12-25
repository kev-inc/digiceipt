import React from 'react'
import Webcam from 'react-webcam'
import OcrResult from './OcrResult';
import CropImage from './CropImage';


class Ocr extends React.Component {

    constructor() {
        super()
        this.state = {
            ocrState:"",
            percentCompleted: 0,
            result: "",
            state: 0,
            image: null
        }
    }

    setRef = webcam => {
        this.webcam = webcam
    }

    capture = () => {
        const imageSrc = this.webcam.getScreenshot()
        var image = new Image()
        image.src = imageSrc
        // image.style.filter = "saturate(200%)"
        // image.style.filter = "contrast(200%)"
        // image.style.filter = "brightness(200%)"

        // document.body.append(image)
        this.scanPicture(imageSrc)
    }

    scanPicture(picture) {
        this.setState({image: picture, state:1})
        // let tesseract = window.Tesseract
        // console.log(tesseract)
        // tesseract.recognize(picture, {
        //     lang: 'eng'
        // })
        //     .progress(message => {
        //         this.setState({ocrState: message.status, state: 1, image: picture})
        //         if(message.status === "recognizing text") {
        //             this.setState({percentCompleted: message.progress})
        //         }
        //         console.log("% completed: ", message)
        //     })
        //     .then(result => {
        //         console.log(result)
        //         this.setState({result: result.text})
        //     })
    }
    scanAgain = () => {
        this.setState({
            ocrState:"",
            progressCompleted: 0,
            result: "",
            state: 0})
    }

    render() {
        const videoConstraints = {
            facingMode: {exact: "environment"}
        }
        return(
            <div className='Ocr p-4'>
                {this.state.state === 0 ? 
                    <div className="camera">
                        <Webcam 
                            audio={false} 
                            width='100%'
                            ref={this.setRef} 
                            // videoConstraints={videoConstraints}
                            screenshotFormat="image/jpeg"
                            ></Webcam>
                        <button className="btn btn-success btn-block" onClick={this.capture}>Capture</button>
                        
                    </div>
                    :
                    <CropImage picture={this.state.image}/>
                    // <OcrResult ocrState={this.state.ocrState}
                    //     percentCompleted={this.state.percentCompleted}
                    //     result={this.state.result}
                    //     scanAgain = {this.scanAgain}
                    //     picture={this.state.image}/>
                }
                
                
                

            </div>
        )
    }
}

export default Ocr