import React from 'react'

import Menu from '@components/menu'
import Process from '@components/process'

class Home extends React.PureComponent {
  render() {
    return (
      <>
        <Menu></Menu>
        <Process></Process>
      </>
    )
  }
}

export default Home
