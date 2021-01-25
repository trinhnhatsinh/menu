import React from 'react'
import './index.less'

import MainMenu from './MainMenu'

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-head">Quản lý shop</div>
      <div className="menu-body">
        <MainMenu />
        <MainMenu />
        <MainMenu />
      </div>
    </div>
  )
}

export default Menu
