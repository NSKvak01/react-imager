import React, { Component } from 'react'
import "./Imager.css"

export class Thumbnail extends Component {
    render() {
        const {handleCurrent} = this.props
        const {path, id} = this.props.item
        return (
            <div>
                <img src={path} alt-text="" onClick={()=>(handleCurrent(id))}/>
            </div>
        )
    }
}

export default Thumbnail
