import React from 'react';
import {Card, Icon, Feed, Button,  Label } from 'semantic-ui-react';
import Avatar from './../../Images/avatar.svg'

function Header() {
    return(
        <Feed>
        <Feed.Event>
          <Feed.Label image = {Avatar}/>
          <Feed.Content>
            <Feed.Date>3 days ago</Feed.Date>
            <Feed.Summary>
              <span>Laura Faucet</span> created a post
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    )
}

export class Post extends React.Component{
    render(){
        return(
            <Card fluid = {true} style = {{boxShadow: "none"}}>
                <Card.Content header= {Header} />
                <Card.Content>
                    <Card.Header>
                        Title of the post
                    </Card.Header>
                    <Card.Description>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptates nostrum laboriosam debitis, dolores molestiae consequatur deserunt voluptatum voluptatibus maiores reiciendis fugit quis, quia quo? Voluptatibus rem sed blanditiis culpa?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis unde quos illo libero pariatur consequatur fuga distinctio voluptates soluta? Delectus, suscipit velit! Pariatur consectetur repellat ducimus atque mollitia nisi? In?</p> 
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button as='div' labelPosition='right'>
                        <Button color='red'>
                            <Icon name='heart' />
                            Like
                        </Button>
                        <Label as='a' basic color='red' pointing='left'>
                          2,048
                        </Label>
                    </Button>
                    <Button floated = "right"><Icon name = "share"></Icon>Share</Button>
                </Card.Content>
            </Card>
        )
    }
}