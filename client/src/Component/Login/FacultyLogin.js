import React from "react"
import { Form, Button } from "semantic-ui-react"
import axios from "axios"
import { Redirect } from "react-router-dom"

export class FacultyLogin extends React.Component {
    state = {
        username: "",
        password: "",
        error: false,
        redirect: false
    }
    onChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }
    onSumbit = () => {
        var session_url = "http://localhost:4002/users/login"

        axios
            .post(
                session_url,
                {},
                {
                    auth: {
                        username: this.state.username,
                        password: this.state.password
                    }
                }
            )
            .then(res => {
                console.log(res)
                if (res.data.status === "ok") {
                    localStorage.setItem("username", res.data.username)
                    this.setState({ redirect: true })
                } else {
                    localStorage.clear()
                }
            })
            .catch(function(error) {
                console.log("Error on Authentication")
            })
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to='/home'></Redirect>
        }
        const { username, password } = this.state
        return (
            <>
                <Form error onSubmit={this.onSumbit}>
                    {this.state.error ? (
                        <span style={{ color: "red" }}>
                            Roll number or password don't match
                        </span>
                    ) : (
                        <span></span>
                    )}
                    <Form.Input
                        name='username'
                        value={username}
                        onChange={this.onChange}
                        label='Username'
                        placeholder='Username'
                        required
                    ></Form.Input>

                    <Form.Input
                        name='password'
                        type = 'password'
                        value={password}
                        onChange={this.onChange}
                        label='Password'
                        placeholder='Password'
                        required
                    ></Form.Input>

                    <Button primary floated='right'>
                        Login
                    </Button>
                    <br />
                    <br></br>
                </Form>
            </>
        )
    }
}
