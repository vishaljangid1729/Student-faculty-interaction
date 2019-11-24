import React from 'react'
import { Form, Button } from 'semantic-ui-react'

export class ResetPassword extends React.Component {
  state = {
    password: '',
    confirmPassword: '',
    error: false
  }
  onChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }
  onSumbit = () => {
    this.validate()
    console.log(this.state)
    alert('Sumbit')
  }
  validate = () => {
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ error: true })
    }
    if (this.state.password === this.state.confirmPassword) {
      this.setState({ error: false })
    }
  }
  render() {
    return (
      <>
        <Form error onSubmit={this.onSumbit}>
          {this.state.error ? (
            <span style={{ color: 'red' }}>Password don't match</span>
          ) : (
            <span></span>
          )}
          <Form.Input
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            label="Password"
            placeholder="Password"
            required
          ></Form.Input>
          <Form.Input
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.onChange}
            label="Confirm Password"
            placeholder="Confirm Password"
            required
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
