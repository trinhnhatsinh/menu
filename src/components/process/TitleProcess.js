import React from 'react'
import Docs from '@misc/docs.png'

const TitleProcess = ({ amount, total }) => {
  const caculatorPercent = () => {
    return 252 - (252 * amount) / total 
  }

  console.log(252 - (252 * amount) / total)

  return (
    <div className="title-process">
      <div className="process-bar">
        <div className="percent">
          <svg>
            <circle r="40" cx="50" cy="50" />
            <circle
              r="40"
              cx="50"
              cy="50"
              style={{ strokeDashoffset: caculatorPercent()}}
            />
          </svg>

          <img src={Docs} />
        </div>
      </div>
      <div className="wrap-content">
        <span className="title">Course</span>
        <div className="content">Quản lý tài chính của bạn djd dkdi sjss</div>
      </div>
    </div>
  )
}

export default TitleProcess
