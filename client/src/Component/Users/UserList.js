import React from 'react'
import { Grid, Table, Button, Modal, Header, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Loader_ } from '../Loader'

const Users = [
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: true },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: true },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: true },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: true },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: true },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: true },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: true },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false },
  { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: true }
]
const style = {
  background: '#fceef3',
  height: '100%'
}
export class UserList extends React.Component {
  state = {
    data: null,
    loading: true,
    authUser: []
  }

  componentDidMount() {
    if (!this.state.data) {
      console.log('helloee')
      axios
        .get('http://localhost:4002/users/userList')
        .then(res => {
          // console.log(res.data)
          // console.log(res.data[1].username)
          this.setState({ loading: false, data: res.data })
          res.data.map(temp => {
            if (temp.username === localStorage.getItem('username')) {
              temp.authorized.map(person => {
                // authUser.push(person)
                this.setState({ authUser: this.state.authUser.concat(person) })
              })
            }
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
  Auth(username) {
    console.log('faculty: ' + localStorage.getItem('username'))
    console.log(username)
    axios
      .post('http://localhost:4002/faculty/auth', {
        faculty: localStorage.getItem('username'),
        student: username
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  UnAuth(username) {
    axios
      .post('http://localhost:4002/faculty/unauth', {
        faculty: localStorage.getItem('username'),
        student: username
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  check(user) {
    if (this.state.authUser.indexOf(user) === -1) {
      console.log('not find')
      return true
    } else {
      return false
    }
  }
  render() {
    if (this.state.loading) {
      return <Loader_></Loader_>
    }
    console.log(this.state.authUser)
    return (
      <div style={style}>
        <Grid.Column>
          <div style={{ paddingLeft: '1%', paddingTop: '1%', position: 'fixed', zIndex: '100' }}>
            <Button as={Link} to="/home" icon>
              {' '}
              <Icon name="arrow left" size="large"></Icon>
            </Button>
          </div>
        </Grid.Column>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Grid centered>
          <Grid.Row>
            <h1 style={{ marginTop: '2%', color: 'grey', fontSize: '3rem' }}>
              <Icon name="users"></Icon>All Users
            </h1>
          </Grid.Row>
          <Grid.Column width={14}>
            <Table celled padded textAlign="center">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Full Name</Table.HeaderCell>
                  <Table.HeaderCell>Username or Roll no.</Table.HeaderCell>
                  <Table.HeaderCell>Department</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  {localStorage.getItem('faculty') === 'yes' ? (
                    <Table.HeaderCell>Status</Table.HeaderCell>
                  ) : (
                    <span></span>
                  )}
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.data.map(user => (
                  <Table.Row key={user.username}>
                    <Table.Cell style={{ textTransform: 'capitalize' }}>{user.fullname}</Table.Cell>
                    <Table.Cell>{user.username}</Table.Cell>
                    <Table.Cell style={{ textTransform: 'capitalize' }}>
                      {user.department}
                    </Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>
                      {user.faculty === true ? <span>Faculty</span> : <span>Student</span>}
                    </Table.Cell>
                    <Table.Cell>
                      {this.check(user.username) ? (
                        <Modal trigger={<Button primary>Authorize </Button>} basic size="small">
                          <Header icon="fire" content="Authorize User" />
                          <Modal.Content>
                            <p>Are you sure?</p>
                          </Modal.Content>
                          <Modal.Actions>
                            <Button basic color="red" inverted>
                              <Icon name="remove" /> No
                            </Button>
                            <Button onClick={() => this.Auth(user.username)} color="green" inverted>
                              <Icon name="checkmark" /> Yes
                            </Button>
                          </Modal.Actions>
                        </Modal>
                      ) : (
                        <Modal trigger={<Button negative>Unauthorize</Button>} basic size="small">
                          <Header icon="fire" content="Unauthorize User" />
                          <Modal.Content>
                            <p>Are you sure?</p>
                          </Modal.Content>
                          <Modal.Actions>
                            <Button basic color="red" inverted>
                              <Icon name="remove" /> No
                            </Button>
                            <Button
                              onClick={() => this.UnAuth(user.username)}
                              color="green"
                              inverted
                            >
                              <Icon name="checkmark" /> Yes
                            </Button>
                          </Modal.Actions>
                        </Modal>
                      )}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
