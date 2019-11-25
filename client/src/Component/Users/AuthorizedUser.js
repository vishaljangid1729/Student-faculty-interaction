import React from 'react'
import { Table, Button, Modal, Header, Icon } from 'semantic-ui-react'
import axios from 'axios'
import { Loader_ } from './../Loader'

export class AuthorizedUser extends React.Component {
  state = {
    data: null,
    loading: true,
    authUser: [],
    authUserData: []
  }
  componentDidMount() {
    console.log('helloee')
    this.fetchData()
  }
  fetchData() {
    this.setState({ loading: true, data: null, authUserData: [], authUser: [] })
    axios
      .get('http://localhost:4002/users/userList')
      .then(res => {
        // console.log(res.data)
        // console.log(res.data[1].username)
        console.log('reques is made')
        this.setState({ loading: false, data: res.data })
        res.data.map(temp => {
          if (temp.username === localStorage.getItem('username')) {
            temp.authorized.map(person => {
              // authUser.push(person)
              this.setState({ authUser: this.state.authUser.concat(person) })
            })
          }
        })

        this.state.data.map(user => {
          if (this.state.authUser.indexOf(user.username) !== -1) {
            this.setState({ authUserData: this.state.authUserData.concat(user) })
          }
        })
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

        this.componentDidMount()
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    if (this.state.loading) {
      return <Loader_></Loader_>
    }
    return (
      <div>
        {console.log(this.state.authUserData)}
        <Table celled padded textAlign="center">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Full Name</Table.HeaderCell>
              <Table.HeaderCell>Username or Roll no.</Table.HeaderCell>
              <Table.HeaderCell>Department</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.authUserData.map(user => (
              <Table.Row>
                <Table.Cell>{user.fullname}</Table.Cell>
                <Table.Cell>{user.username}</Table.Cell>
                <Table.Cell>{user.department}</Table.Cell>
                <Table.Cell>
                  <Modal trigger={<Button negative>Unauthorize</Button>} basic size="small">
                    <Header icon="fire" content="Unauthorize User" />
                    <Modal.Content>
                      <p>Are you sure?</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button basic color="red" inverted>
                        <Icon name="remove" /> No
                      </Button>
                      <Button onClick={() => this.UnAuth(user.username)} color="green" inverted>
                        <Icon name="checkmark" /> Yes
                      </Button>
                    </Modal.Actions>
                  </Modal>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    )
  }
}
