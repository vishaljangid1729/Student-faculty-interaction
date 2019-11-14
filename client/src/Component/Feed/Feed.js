import React from 'react';
import { Grid, Responsive, Button, Icon, Segment} from 'semantic-ui-react';
import { Post } from './Post';
import { Sidebar } from './Sidebar/sidebar';

const style = {
    margin: "2%",
    padding: "2%"
}

export class Feed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sidebarShow: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle (){
        if(this.state.sidebarShow){
            this.setState({sidebarShow: false})
        }
        else{
            this.setState({sidebarShow: true});
        }
    }
    
    render(){
        return(
            <div style = {{backgroundColor: "#fceef3"}}>
                <Grid >
                    <Grid.Row >
                        {/* <SearchTop ></SearchTop> */}
                        <Grid.Column style = {{position: "fixed", zIndex: '100', paddingTop: '6%'}}>
                            <Button onClick = {console.log("heool")} icon secondary floated = "right" verticallyAlign = "bottom" ><Icon name = "bars"></Icon></Button>
                        </Grid.Column>
                    </Grid.Row>
                        
                    
                    <Grid.Column  mobile = {16} tablet = {12} computer = {12}>
                        <div style = {style}>
                            <Post></Post>
                            <Post></Post>
                            <Post></Post>
                            <Post></Post>
                            <Post></Post>
                            <Post></Post>
                            <Post></Post>
                            <Post></Post>
                            <Post></Post>
                            <Post></Post>
                            <Post></Post>
                            <Post></Post>
                        </div>
                    </Grid.Column>
                    <Responsive  minWidth = {700}>
                        <Grid.Column only = "computer">
                            <Sidebar></Sidebar>
                        </Grid.Column>
                    </Responsive>
                    {this.state.sidebarShow ?  < Segment style = {{zIndex: 12}}><Sidebar></Sidebar></ Segment>
                            
                  : <span></span>}
                </Grid>
            </div>
            
        )
    }
}