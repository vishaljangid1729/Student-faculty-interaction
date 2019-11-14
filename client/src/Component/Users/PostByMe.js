import React from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import { MyPost } from '../Feed/MyPost';


const style = {
    margin: "2%",
    padding: "2%"
}

export class PostByMe extends React.Component{
    render(){
        return(
            <div style = {{backgroundColor: "#fceef3"}}>
                <Grid centered >
                    <Grid.Column fluid width = {16}>
                            <div style = {{zIndex: '100', paddingLeft: '1%', paddingTop: "1%", position: 'fixed', marginBottom: '3%'}}>
                                <Button as = {Link} to ='/profile' icon > <Icon name = "arrow left" size = "large"></Icon></Button>

                            </div>
                    </Grid.Column>
                    <Grid.Row>
                        <h1 style = {{marginTop: '2%', color: 'grey', fontSize: '3rem'}}><Icon name = "file"></Icon>All Post</h1>
                    </Grid.Row>
                        
                    <Grid.Column  mobile = {16} tablet = {12} computer = {12}>
                        <div style = {style}>
                           <MyPost></MyPost>
                           <MyPost></MyPost>
                           <MyPost></MyPost>
                           <MyPost></MyPost>
                           <MyPost></MyPost>
                           <MyPost></MyPost>
                           <MyPost></MyPost>
                           <MyPost></MyPost>

                        </div>
                    </Grid.Column>
                </Grid>
            </div>
            
        )
    }
}