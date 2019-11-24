import React from 'react'
import { Header, Icon, Button, Grid } from 'semantic-ui-react'
import Filter from '../../Filters/Filter'
import Sort from '../../Filters/Sorts'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

export class Sidebar extends React.Component {
  state = {
    logout: false
  }
  logOut = () => {
    localStorage.clear()
    this.setState({ logout: true })
  }

  render() {
    if (this.state.logout) {
      return <Redirect to="/"></Redirect>
    }
    return (
      <div style={{ position: 'fixed', marginRight: '2%' }}>
        <Grid>
          <Grid.Row>
            <Header as="h2" color="grey" icon>
              <Icon name="user" color="blue" circular />
              <Header.Content>Visahl Jangid</Header.Content>
            </Header>
          </Grid.Row>
          <Grid.Row>
            <Button primary as={Link} to="/new-post">
              {' '}
              <Icon name="add"></Icon>New Post
            </Button>
          </Grid.Row>
          <Grid.Row>
            <Sort></Sort>
          </Grid.Row>
          <Grid.Row>
            <Header as="h3" color="grey">
              <Icon name="filter" size="tiny" color="grey" />
              <Header.Content>Filter</Header.Content>
            </Header>
            <Filter></Filter>
          </Grid.Row>
          <Grid.Row>
            <Button as={Link} to="/all-user">
              {' '}
              <Icon name="users"></Icon>All Users
            </Button>
          </Grid.Row>
          <Grid.Row>
            <Button as={Link} to="/profile">
              {' '}
              <Icon name="setting"></Icon>Profile
            </Button>
          </Grid.Row>
          <Grid.Row>
            <Button negative onClick={this.logOut}>
              {' '}
              <Icon name="log out"></Icon>Logout
            </Button>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
