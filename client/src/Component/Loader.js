import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

export class Loader_ extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Dimmer active inverted>
          <Loader size="huge">Loading</Loader>
        </Dimmer>
      </div>
    )
  }
}
