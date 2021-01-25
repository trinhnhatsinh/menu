import React from 'react'

import ProcessItem from './ProcessItem'

const ListProcess = ({amount, total}) => {
  return (
    <div className="list-process">
      {
        Array(total).fill(0).map((item, index) => {
          return <ProcessItem active={index < amount} />
        })
      }
    </div>
  )
}

export default ListProcess
