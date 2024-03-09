import {Component} from 'react'

class LetterCalculator extends Component {
  state = {letters: ''}

  cal = event => {
    this.setState({
      letters: event.target.value,
    })
  }

  render() {
    const {letters} = this.state

    const a = letters.length

    return (
      <div>
        <h1>Calculate the Letters you enter</h1>
        <label htmlFor="phrase">Enter the phrase</label>
        <input
          type=""
          id="phrase"
          placeholder="Enter the phrase"
          onChange={this.cal}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          alt="letters calculator"
        />
        <p>No.of letters: {a}</p>
      </div>
    )
  }
}
export default LetterCalculator
