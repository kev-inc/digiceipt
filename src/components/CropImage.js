import React from 'react'

class CropImage extends React.Component {

    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext('2d')
        const ctx2 = canvas.getContext('2d')

        const img = new Image()
        img.src = this.props.picture
        img.onload = function() {
            canvas.setAttribute('width', img.width)
            canvas.setAttribute('height', img.height)
            ctx.drawImage(img, 0,0)
            ctx2.fillStyle = "rgba(255, 255, 255, 0.3)";
            ctx2.fillRect(0,0,canvas.width, canvas.height)
            
        }

        canvas.onmousedown = function(evt) {
            var rect = canvas.getBoundingClientRect()
            var mouseX = evt.clientX - rect.left
            var mouseY = evt.clientY - rect.top
            console.log(mouseX)
            console.log(mouseY)

            ctx2.clearRect(mouseX, mouseY, 10,10)
            // ctx2.beginPath()
            // ctx2.arc(mouseX, mouseY,10, 0, 2*Math.PI)
            // ctx2.fillStyle = "transparent";
            // ctx2.fill()
        }
    }


    render() {
        return(
            <div className="CropImage">
                <h3 className="font-weight-light">Please highlight the shop name</h3>
                <canvas ref='canvas'/>
            </div>
        )
    }
}





export default CropImage