import React from 'react';
import { HomeButton } from './HomeButtons';
import {Header, Button} from 'semantic-ui-react'
import Img from './../../Images/knowledge.svg'
import { Link } from 'react-router-dom'
// import axios from 'axios'

const style = {
    background: "#fceef3",
    height: "100vh"
}
const heading = {
    fontSize: "2.5rem",
    text: "white",
    marginBottom: "10%"
}


export class Home extends React.Component{
    // componentDidMount(){
    //     axios.get('http://localhost:4002')
    //     .then(res => {
    //         console.log(res.data)
    //     })
    // }
    render(){
        return(
            <div style = { style }>
                <div style = {heading}>
                    <Header size = "huge" as = "h1" image = {Img} textAlign = "center" content = "Campus Information"></Header>
                </div>
                <HomeButton></HomeButton>
                <Button as = {Link} to = '/home'>Home</Button>
            </div>
        )
    }
}