import React from 'react'
import { Grid, Table, Button, Modal, Header, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom'


const Users = [
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: true},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: true},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: true},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: true},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: true},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: true},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: true},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: false},
    { name: 'Vishal Jangid', username: 'u17co073', department: 'Computer', status: true}

]
const style = {
    background: "#fceef3",
    height: "100%"
}
export class UserList extends React.Component{
    render(){
        return(
            <div style = {style}>
                <Grid.Column>
                            <div style = {{paddingLeft: '1%', paddingTop: "1%", position: 'fixed', zIndex: '100'}}>
                                <Button as = {Link} to ='/home' icon > <Icon name = "arrow left" size = "large"></Icon></Button>
                            </div>
                            
                </Grid.Column>
                <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                <Grid centered>
                <Grid.Row>
                <h1 style = {{marginTop: '2%', color: 'grey', fontSize: '3rem'}}><Icon name = "users"></Icon>All Users</h1>
                </Grid.Row>
                <Grid.Column width = {14}>
                    <Table celled padded textAlign = "center">
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>
                                    Full Name
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Username or Roll no.
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Department
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Status
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>  
                            {Users.map((user) =>
                                <Table.Row>
                                    <Table.Cell>{user.name}</Table.Cell>
                                    <Table.Cell>{user.username}</Table.Cell>
                                    <Table.Cell>{user.department}</Table.Cell>
                                    <Table.Cell>
                                    {user.status ? <Modal trigger={<Button negative>Unauthorize</Button>} basic size='small'>
                                          <Header icon='fire' content='Unauthorize User' />
                                          <Modal.Content>
                                            <p>
                                              Are you sure?
                                            </p>
                                          </Modal.Content>
                                          <Modal.Actions>
                                            <Button basic color='red' inverted>
                                              <Icon name='remove' /> No
                                            </Button>
                                            <Button color='green' inverted>
                                              <Icon name='checkmark' /> Yes
                                            </Button>
                                          </Modal.Actions>
                                        </Modal>:
                                <Modal trigger={<Button primary>Authorize</Button>} basic size='small'>
                                <Header icon='fire' content='Authorize User' />
                                <Modal.Content>
                                  <p>
                                    Are you sure?
                                  </p>
                                </Modal.Content>
                                <Modal.Actions>
                                  <Button basic color='red' inverted>
                                    <Icon name='remove' /> No
                                  </Button>
                                  <Button color='green' inverted>
                                    <Icon name='checkmark' /> Yes
                                  </Button>
                                </Modal.Actions>
                              </Modal>} 
                                    </Table.Cell>
                                      
                                </Table.Row> 
                            )}
                                
                            
                        </Table.Body>
                    </Table>
                </Grid.Column>
            </Grid>
            </div>
            

        )
    }
}