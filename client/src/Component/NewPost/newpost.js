import React from 'react'
import { Form, Button, Select, TextArea, Grid, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
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
const options2 = [
  { key: 'self', text: 'Self', value: 'self' },
  { key: 'people1', text: 'people 1', value: 'people1' }
]
const style = {
  background: '#fceef3',
  height: '100vh'
}

export class NewPost extends React.Component {
  state = {
    title: '',
    department: '',
    textarea: '',
    reference: '',
    error: false
  }
  onChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }
  onSumbit = () => {
    console.log(this.state)
  }
  render() {
    return (
      <div style={style}>
        <Grid.Row>
          <Grid.Column fluid width={16}>
            <div
              style={{
                zIndex: '100',
                paddingLeft: '1%',
                paddingTop: '2%',
                position: 'fixed',
                marginBottom: '3%'
              }}
            >
              <Button as={Link} to="/home" icon>
                {' '}
                <Icon name="arrow left" size="large"></Icon>
              </Button>
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid centered>
          <Grid.Row>
            <h1
              style={{
                marginTop: '2%',
                color: 'grey',
                fontSize: '3rem'
              }}
            >
              New Post
            </h1>
          </Grid.Row>
          <Grid.Column width={13}>
            <Form error onSubmit={this.onSumbit}>
              <Form.Input
                required
                name="title"
                value={this.state.title}
                onChange={this.onChange}
                label="Title"
                placeholder="Post Title"
              ></Form.Input>

              <Form.Field
                control={Select}
                label="Department"
                options={options}
                placeholder="Department"
                onChange={this.onChange}
                value={this.state.department}
                name="department"
              />
              <Form.Field
                control={Select}
                label="Reference"
                options={options2}
                placeholder="Reference"
                onChange={this.onChange}
                value={this.state.reference}
                name="reference"
              />
              <TextArea
                label="Content"
                placeholder="Post Content"
                style={{ minHeight: 150 }}
                name="textarea"
                onChange={this.onChange}
              />
              <br></br>
              <br></br>
              <br></br>

              <Button primary floated="right">
                {' '}
                <Icon name="send"></Icon>Post
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
