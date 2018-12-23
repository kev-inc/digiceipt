import React from 'react'

const OcrResult = props => (
    <div className="OcrResult">
        <div className="status">
            <span>{props.ocrState.toLocaleUpperCase()}</span>
        </div>
        <div className="progress">
            <div className="progress-bar" style={{width: `${props.percentCompleted*100}%`}}></div>
        </div>
        <div className="result">
            <pre>
                {props.result}
            </pre>
        </div>
        <button className="btn btn-danger btn-block" onClick={props.scanAgain}>Scan again</button>
    </div>
)

export default OcrResult