import React from 'react';
import { Grid, Image, Header, Form, Button, Select, Message } from 'semantic-ui-react'
import Img from './../../Images/register.svg';
import axios from 'axios'


const options = [
    { key: 'coed', text: 'Computer Engineering', value: 'computer' },
    { key: 'med', text: 'Mechanical Engineering', value: 'mechanical' },
    { key: 'ched', text: 'Chemical Engineering', value: 'chemical' },
    { key: 'ced', text: 'Civil Engineering', value: 'civil' },
    { key: 'eed', text: 'Electrical Engineering', value: 'electrical' },
    { key: 'ecd', text: 'Electronic Engineering', value: 'electronic' },
    { key: 'chem', text: 'Applied Chemistry', value: 'chemistry' },
    { key: 'phy', text: 'Applied Physics', value: 'physics' },
    { key: 'math', text: 'Applied Math. & Humanities', value: 'math' },
    { key: 'mech', text: 'Applied Mechanics', value: 'mechanics' }
]
const style = {
    margin: "5%",
    
}
export class FacultyRegister extends React.Component{
    state = {
        username: '',
        password: '',
        confirmPassword: '',
        name: '',
        department: '',
        mobile: '',
        email: '',
        error: false,
        faculty: true,
        alreadyExist: false,
        success: false
    }
    onChange = (e, {name, value}) =>{
        this.setState({[name]: value});
    }
    validate = () =>{
        if(this.state.password !== this.state.confirmPassword){
            this.setState({error: true})
            return false
        }
        if(this.state.password === this.state.confirmPassword){
            this.setState({error: false})
            return true
        }
    }
    onSumbit = (e) =>{
        // e.preventDefault();
        this.setState({ alreadyExist: false, success: false })
        if(this.validate()){
            axios.post("http://localhost:4002/users/signup", this.state)
            .then(res =>{
                if (res.data.alreadyExist) {
                    this.setState({ alreadyExist: true })
                } else if (!res.data.alreadyExist) {
                    this.setState({ success: true })
                }
            })
            .catch(err =>{
                console.log(err)
            })
        }
    }
    render(){
        const {username, password, confirmPassword, name, department, email, mobile} = this.state
        return(
            <Grid stackable columns = {2}>
                <Grid.Column>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <Image verticalAlign = "bottom" fluid = {true} floated = "left" src = {Img}></Image>
                </Grid.Column>
                <Grid.Column>
                    <div style = {style}>
                        <Header as = "h1" color = "grey" textAlign = "center" content = "Register SVNIT Faculty"></Header>
                        {this.state.alreadyExist ? (
                            <Message error>
                                <Message.Header>
                                    Account Alredy exist
                                </Message.Header>
                            </Message>
                        ) : (
                            <span></span>
                        )}
                        {this.state.success ? (
                            <Message success>
                                <Message.Header>
                                    Account created successfully
                                </Message.Header>
                            </Message>
                        ) : (
                            <span></span>
                        )}
                        <Form error onSubmit = {this.onSumbit}>
                            
                            <Form.Input required name = "name" value = {name} onChange = {this.onChange} label = "Full Name" placeholder = "Full Name"></Form.Input>
                            <Form.Input required name = "username" value = {username} onChange = {this.onChange} label = "Username" placeholder = "Username"></Form.Input>
                            <Form.Input required name = "email" value = {email} onChange = {this.onChange} type = "email" label = "Email" placeholder = "Email Address"></Form.Input>
                            
                            <Form.Input required name = "mobile" type = 'tel' value = {mobile} onChange = {this.onChange} label = "Mobile" placeholder = "Mobile"></Form.Input>
                            
                            <Form.Field
                              control={Select}
                              label='Department'
                              options={options}
                              placeholder='Department'
                              onChange = {this.onChange}
                              value = {department}
                              name = "department"
                            />

                            
                            <Form.Input type = "password" required name = "password" value = {password} onChange = {this.onChange} label = "Password" placeholder = "Password"></Form.Input>
                            <Form.Input type = "password" required name = "confirmPassword" value = {confirmPassword} onChange = {this.onChange} label = "Confirm Password" placeholder = "Confirm Password"></Form.Input>
                            {this.state.error ? <span style = {{color: "red"}}>Password don't match.</span> : <span></span> }

                            <Button primary floated = "right">Register</Button>
                            <br/>
                            <br></br>
                        </Form>
                    </div>
                </Grid.Column>
                

            </Grid>
        )
    }
}