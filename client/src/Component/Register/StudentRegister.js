import React from "react"
import { Grid, Image, Header, Form, Button, Select } from "semantic-ui-react"
import Img from "./../../Images/register.svg"
import axios from "axios"

const options = [
    { key: "coed", text: "Computer Engineering", value: "computer" },
    { key: "med", text: "Mechanical Engineering", value: "mechanical" },
    { key: "ched", text: "Chemical Engineering", value: "chemical" },
    { key: "ced", text: "Civil Engineering", value: "civil" },
    { key: "eed", text: "Electrical Engineering", value: "electrical" },
    { key: "ecd", text: "Electronic Engineering", value: "electronic" },
    { key: "chem", text: "Applied Chemistry", value: "chemistry" },
    { key: "phy", text: "Applied Physics", value: "physics" },
    { key: "math", text: "Applied Math. & Humanities", value: "math" },
    { key: "mech", text: "Applied Mechanics", value: "mechanics" }
]
const style = {
    margin: "5%"
}
export class StudentRegister extends React.Component {
    state = {
        username: "",
        password: "",
        confirmPassword: "",
        name: "",
        department: "",
        mobile: "",
        email: "",
        faculty: false,
        error: false
    }
    onChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }
    validate = () => {
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({ error: true })
            return false
        }
        if (this.state.password === this.state.confirmPassword) {
            this.setState({ error: false })
            return true
        }
    }
    onSumbit = (e) => {
        // e.preventDefault();
        if(this.validate()){
            axios.post("/users/signup", this.state)
            .then(res =>{
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })
        }
    }
    render() {
        const {
            username,
            password,
            confirmPassword,
            name,
            department,
            email,
            mobile
        } = this.state
        return (
            <Grid stackable columns={2}>
                <Grid.Column>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <Image
                        verticalAlign='bottom'
                        fluid={true}
                        floated='left'
                        src={Img}
                    ></Image>
                </Grid.Column>
                <Grid.Column>
                    <div style={style}>
                        <Header
                            as='h1'
                            color='grey'
                            textAlign='center'
                            content='Register as SVNIT Student'
                        ></Header>
                        <Form error onSubmit={this.onSumbit}>
                            <Form.Input
                                required
                                name='name'
                                value={name}
                                onChange={this.onChange}
                                label='Full Name'
                                placeholder='Full Name'
                            ></Form.Input>
                            <Form.Input
                                required
                                name='username'
                                value={username}
                                onChange={this.onChange}
                                label='Roll Number'
                                placeholder='eg. u17co073'
                            ></Form.Input>
                            <Form.Input
                                required
                                name='email'
                                value={email}
                                onChange={this.onChange}
                                type='email'
                                label='Email'
                                placeholder='Email Address'
                            ></Form.Input>

                            <Form.Input
                                required
                                name='mobile'
                                type='tel'
                                value={mobile}
                                onChange={this.onChange}
                                label='Mobile'
                                placeholder='Mobile'
                            ></Form.Input>

                            <Form.Field
                                control={Select}
                                label='Department'
                                options={options}
                                placeholder='Department'
                                onChange={this.onChange}
                                value={department}
                                name='department'
                            />

                            <Form.Input
                                type='password'
                                required
                                name='password'
                                value={password}
                                onChange={this.onChange}
                                label='Password'
                                placeholder='Password'
                            ></Form.Input>
                            <Form.Input
                                type='password'
                                required
                                name='confirmPassword'
                                value={confirmPassword}
                                onChange={this.onChange}
                                label='Confirm Password'
                                placeholder='Confirm Password'
                            ></Form.Input>
                            {this.state.error ? (
                                <span style={{ color: "red" }}>
                                    Password don't match.
                                </span>
                            ) : (
                                <span></span>
                            )}

                            <Button primary floated='right'>
                                Register 
                            </Button>
                            <br />
                            <br></br>
                        </Form>
                    </div>
                </Grid.Column>
            </Grid>
        )
    }
}
