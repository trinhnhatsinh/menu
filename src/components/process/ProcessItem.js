import React from 'react'

import tick from '@misc/tick.png'

const ProcessItem = ({ active }) => {
  return (
    <div className={active ? `process-item active` : `process-item`}>
      <div className="process-item-left">
        <div className="vertical-line"></div>
        <div className="wrap-circle">
          <div className="circle">{active ? <img src={tick} /> : <></>}</div>
        </div>
      </div>
      <div className="process-item-right">
        <div className="wrap-content">
          <span className="title">Chuyên đề 1</span>
          <span className="content">Đăng bán sản phẩm</span>
        </div>
      </div>
    </div>
  )
}

export default ProcessItem
