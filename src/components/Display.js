import React, { Component } from 'react'
import "./Imager.css"

export class Display extends Component {

    render() {
        const {handleRandom, displayImage, handleBack, handleNext} = this.props
        console.log(displayImage)
        return (
            <div className="display">
                <img src={displayImage} alt-text="display image" />
                <div className="buttons">
                    <button onClick={handleRandom}>Random</button>
                    <div className="buttons-tog">
                        <button onClick={handleBack}>Back</button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Display
