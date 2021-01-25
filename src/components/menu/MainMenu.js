import React, { useState } from 'react'
import Arrow from '@misc/arrow.png'

import SubMenu from './SubMenu'

const MainMenu = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="main-menu">
      <div className="main-menu-head" onClick={toggle}>
        <span>Đăng bán sản phẩm</span>
        <div
          className="wrap-arrow"
          style={
            open
              ? { transform: 'rotate(-180deg)' }
              : { transform: 'rotate(-90deg)' }
          }
        >
          <img src={Arrow} />
        </div>
      </div>
      <div
        className="main-menu-body"
        style={
          open
            ? { height: `${((4 * 40) - 10) + 24}px` }
            : { height: '0px' }
        }
      >
        <SubMenu text="Đăng bán mới" />
        <SubMenu text="Đăng bán hàng loạt" />
        <SubMenu text="Hàng đặt trước" />
        <SubMenu text="Công cụ đăng bán" />
      </div>
    </div>
  )
}

export default MainMenu
