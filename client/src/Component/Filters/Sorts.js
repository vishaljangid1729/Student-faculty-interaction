import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Sort extends Component {
  state = { activeItem: 'newest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu text>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item name="newest" active={activeItem === 'newest'} onClick={this.handleItemClick} />
        <Menu.Item name="oldest" active={activeItem === 'oldest'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}
