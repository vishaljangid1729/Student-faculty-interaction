import React from 'react';
import {Form,  Button} from 'semantic-ui-react'

export class FacultyLogin extends React.Component{
    state = {
        username: '',
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
        const {username, password} = this.state
        return(
            <>
                <Form error onSubmit = {this.onSumbit}>
                    {this.state.error ? <span style = {{color: "red"}}>Roll number or password don't match</span> : <span></span> }
                    <Form.Input name = "username" value = {username} onChange = {this.onChange} label = "Username" placeholder = "Username" required></Form.Input>
                    
                    <Form.Input name = "password" value = {password} onChange = {this.onChange} label = "Password" placeholder = "Password" required></Form.Input>
                    
                    <Button primary floated = "right">Login</Button>
                    <br/>
                    <br></br>
                </Form>
            </>
        )
    }
}