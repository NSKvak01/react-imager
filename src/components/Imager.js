import React, { Component } from 'react'
import Thumbnail from "./Thumbnail"
import Display from "./Display"
import "./Imager.css"
import {v4 as uuidv4} from "uuid"

export class Imager extends Component {
    state={
        paths:[
            {
                id:uuidv4(),
                path:"images/1.jpg"
            },
            {
                id:uuidv4(),
                path:"images/2.jpg"
            },
            {
                id:uuidv4(),
                path:"images/3.jpg"
            },
            {
                id:uuidv4(),
                path:"images/4.jpg"
            },
            {
                id:uuidv4(),
                path:"images/5.jpg"
            },
            {
                id:uuidv4(),
                path:"images/6.jpg"
            },
            {
                id:uuidv4(),
                path:"images/7.jpg"
            },
            {
                id:uuidv4(),
                path:"images/8.jpg"
            },
            {
                id:uuidv4(),
                path:"images/9.jpg"
            },
            {
                id:uuidv4(),
                path:"images/10.jpg"
            },
            {
                id:uuidv4(),
                path:"images/11.jpg"
            },
            {
                id:uuidv4(),
                path:"images/12.jpg"
            },
        ],
        displayImage:"images/2.jpg"
    }

    handleRandom = ()=>{
        this.setState({
            displayImage:this.state.paths[Math.floor(Math.random()*12)].path
        })
        console.log("display image", this.state.displayImage)
    }

    handleBack = ()=>{
        let index
        this.state.paths.forEach((item)=>{
            if(item.path===this.state.displayImage){
                index=this.state.paths.indexOf(item)
            }
        })
        let back
        if(index!==0){
            back=this.state.paths[index-1].path
        } else{
            back = this.state.paths[11].path
        }

        this.setState({
            displayImage:back
        })
    }
    handleNext = ()=>{
        let index
        this.state.paths.forEach((item)=>{
            if(item.path===this.state.displayImage){
                index=this.state.paths.indexOf(item)
            }
        })
        let next
        if(index!==11){
            next=this.state.paths[index+1].path
        } else{
            next = this.state.paths[0].path
        }

        this.setState({
            displayImage:next
        })
    }

    handleCurrent = (id)=>{
        let current
        this.state.paths.forEach((item)=>{
            if(item.id===id){
                current = item.path
            }
        })
        this.setState({
            displayImage:current
        })
        console.log('clicked', id)
    }

    render() {
        return (
            <div className = "body">
                <Display
                handleRandom ={this.handleRandom}
                displayImage={this.state.displayImage}
                handleBack = {this.handleBack}
                handleNext= {this.handleNext}
                />
                <br />
                <div className="thumbnails">
                    {this.state.paths.map((item) => {
                    return <Thumbnail 
                        key={item.id}
                        item={item} 
                        handleCurrent={this.handleCurrent}/>
                    }) 
                }
                </div>
                
            </div>
        )
    }
}

export default Imager
