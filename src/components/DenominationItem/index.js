// Write your code here

import './index.css'

const DenominationItem = props => {
  const {value, clickButton} = props

  const onMode = () => {
    clickButton(value)
  }
  return (
    <li>
    <button type="button" className="num" onClick={onMode}>
      {value}
    </button>
    </li>
  )
}

export default DenominationItem
