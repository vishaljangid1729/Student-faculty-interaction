import React from 'react';
import {Form,  Button} from 'semantic-ui-react'

export class StudentLogin extends React.Component{
    state = {
        rollNo: '',
        password: '',
        error: false
    }
    onChange = (e, {name, value}) =>{
        this.setState({[name]: value});
    }
    onSumbit = () =>{
        console.log(this.state)
        alert("Sumbit");
    }
    render(){
        const {rollNo, password} = this.state
        return(
            <>
                <Form error onSubmit = {this.onSumbit}>
                    {this.state.error ? <span style = {{color: "red"}}>Roll number or password don't match</span> : <span></span> }
                    <Form.Input required name = "rollNo" value = {rollNo} onChange = {this.onChange} label = "Roll Number" placeholder = "eg. U17CO073"></Form.Input>
                    
                    <Form.Input required name = "password" value = {password} onChange = {this.onChange} label = "Password" placeholder = "Password"></Form.Input>
                    
                    <Button primary floated = "right">Login</Button>
                    <br/>
                    <br></br>
                </Form>
            </>
        )
    }
}