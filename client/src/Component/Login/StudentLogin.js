import React from 'react'
import { Form, Button, Message } from 'semantic-ui-react'
import axios from 'axios'

export class StudentLogin extends React.Component {
  state = {
    rollNo: '',
    password: '',
    error: null,
    redirect: false
  }
  onChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }
  onSumbit = () => {
    this.setState({ error: null })
    var session_url = 'http://localhost:4002/users/login'

    axios
      .post(
        session_url,
        {},
        {
          auth: {
            username: this.state.rollNo,
            password: this.state.password
          }
        }
      )
      .then(res => {
        if (res.data.status === 'ok') {
          localStorage.setItem('username', res.data.username)
          localStorage.setItem('faculty', 'no')
          this.setState({ redirect: true })
          window.location.href = 'http://localhost:3000/home'
        } else if (res.data.status === 'notExist') {
          this.setState({ error: "User don't exist" })
          localStorage.clear()
        } else if (res.data.status === 'passwordDontMatch') {
          this.setState({ error: "Password dont' match" })
          localStorage.clear()
        }
      })
      .catch(function(error) {
        console.log('Error on Authentication')
      })
  }
  render() {
    const { rollNo, password } = this.state
    return (
      <>
        <Form error onSubmit={this.onSumbit}>
          {this.state.error ? (
            <Message error>
              <Message.Header>{this.state.error}</Message.Header>
            </Message>
          ) : (
            <span></span>
          )}
          <Form.Input
            required
            name="rollNo"
            value={rollNo}
            onChange={this.onChange}
            label="Roll Number"
            placeholder="eg. U17CO073"
          ></Form.Input>

          <Form.Input
            // required
            type="password"
            name="password"
            value={password}
            onChange={this.onChange}
            label="Password"
            placeholder="Password"
          ></Form.Input>

          <Button primary floated="right">
            Login
          </Button>
          <br />
          <br></br>
        </Form>
      </>
    )
  }
}
