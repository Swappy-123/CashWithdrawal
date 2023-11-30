// Write your code here

import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  clickButton = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card">
          <div className="first">
            <button type="button" className="btn">
              s
            </button>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="second">
            <p className="para">Your Balance</p>
            <div className="sub">
              <p className="balance">{balance}</p>
              <p className="des">in Rupees</p>
            </div>
          </div>
          <div className="third">
            <p className="balance">Withdraw</p>
            <p className="para">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="fourth">
            {denominationsList.map(every => (
              <DenominationItem
                value={every.value}
                key={every.id}
                clickButton={this.clickButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
