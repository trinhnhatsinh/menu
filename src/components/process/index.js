import React, { useState } from 'react'
import './index.less'

import TitleProcess from './TitleProcess'
import ListProcess from './ListProcess'

const Process = () => {
  const [amount, setAmount] = useState(0)

  const changeAmount = () => {
    setAmount(amount + 1)
  }

  return (
    <div className="process">
      <button onClick={changeAmount}>add process</button>
      <TitleProcess amount={amount} total={4} />
      <ListProcess amount={amount} total={4} />
    </div>
  )
}

export default Process
