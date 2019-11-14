import React from 'react';
import { Grid, Button, Icon, Header, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { AuthorizedUser } from './AuthorizedUser';
import { ResetPassword } from './ResetPassword';


const style = {
    background: "#fceef3",
    height: "100vh"
}


export class Profile extends React.Component{
    
    render(){
        return(
            <div style = {style}>
                <Grid >
                    <Grid.Row>
                        <Grid.Column fluid width = {16}>
                            <div style = {{zIndex: '100', paddingLeft: '1%', paddingTop: "1%", position: 'fixed', marginBottom: '3%'}}>
                                <Button as = {Link} to ='/home' icon > <Icon name = "arrow left" size = "large"></Icon></Button>
                                

                            </div>
                        </Grid.Column>
                    
                    </Grid.Row>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Grid.Row centered >
                        <Modal trigger = {<Button primary> <Icon name = "edit"></Icon>Reset Password</Button>} size = "mini" dimmer = "blurring" centered = {false} >
                            <Modal.Header>
                                Reset Password
                            </Modal.Header>
                            <Modal.Content>
                                <ResetPassword></ResetPassword>
                            </Modal.Content>
                        </Modal>
                        <Button as = {Link} to ='/my-post'> <Icon name = "file alternate outline"></Icon>My Post</Button>
                    </Grid.Row>

                    <Grid.Row centered>
                        <Grid.Column width = {15}>
                            <Header as = "h2" color = "grey" textAlign = "center" content = "Authorized Users"></Header>
                            <AuthorizedUser></AuthorizedUser>
                        </Grid.Column>
                    
                    </Grid.Row>
                    
                </Grid>
            </div>
        )
    }
}