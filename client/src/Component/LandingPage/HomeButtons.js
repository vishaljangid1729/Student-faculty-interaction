import React from 'react';
import { Card, Button, Grid, Modal } from 'semantic-ui-react'
import { StudentLogin } from '../Login/StudentLogin';
import { FacultyLogin } from '../Login/FacultyLogin';
import {Link} from 'react-router-dom'

export class HomeButton extends React.Component{
    render(){
        return(
            <Grid  container stackable columns = {2}>
                <Grid.Column centered>
                    <Card style = {{boxShadow: "none"}}>
                        <Card.Content>
                            <Card.Header>
                                Student
                            </Card.Header>
                            <Card.Meta>
                                Campus Students
                            </Card.Meta>
                        </Card.Content>
                        <Card.Content>
                        <Button.Group size='large'>
                            <Modal trigger = {<Button>Login</Button>} size = "mini" dimmer = "blurring" centered = {false} >
                                <Modal.Header>
                                    Login as Student
                                </Modal.Header>
                                <Modal.Content>
                                    <StudentLogin></StudentLogin>
                                </Modal.Content>
                            </Modal>
                            <Button.Or />
                            <Button primary as = {Link} to = "/student-register">Register</Button>
                        </Button.Group>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column centered>
                    <Card style = {{boxShadow: "none"}}>
                        <Card.Content>
                            <Card.Header>
                                Faculty
                            </Card.Header>
                            <Card.Meta>
                                Campus Faculty
                            </Card.Meta>
                        </Card.Content>
                        <Card.Content>
                        <Button.Group size='large'>
                        <Modal trigger = {<Button>Login</Button>} size = "mini" dimmer = "blurring" centered = {false} >
                                <Modal.Header>
                                    Login as Faculty
                                </Modal.Header>
                                <Modal.Content>
                                    <FacultyLogin></FacultyLogin>
                                </Modal.Content>
                            </Modal>
                            <Button.Or />
                            <Button primary as = {Link} to = "/faculty-register">Register</Button>
                        </Button.Group>
                        </Card.Content>
                    </Card>

                </Grid.Column>

            </Grid>
                
            
        )
    }
}