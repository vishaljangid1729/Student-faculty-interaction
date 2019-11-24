import React from 'react'
import { Form } from 'semantic-ui-react'

export class SearchTop extends React.Component {
  state = {
    text: ''
  }
  onChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }
  onSumbit = () => {
    console.log(this.state)
  }
  render() {
    return (
      <Form error onSubmit={this.onSumbit}>
        <Form.Input icon="search" placeholder="Search..." onChange={this.onChange} />
      </Form>
    )
  }
}
