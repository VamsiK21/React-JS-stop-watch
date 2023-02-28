// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timerElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  onClickedReset = () => {
    clearInterval(this.intervalId)
    this.setState({timerElapsedInSeconds: 0})
  }

  onClickedStop = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timerElapsedInSeconds: prevState.timerElapsedInSeconds + 1,
    }))
  }

  onClickedStart = () => {
    this.intervalId = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timerElapsedInSeconds} = this.state
    const seconds = Math.floor(timerElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timerElapsedInSeconds} = this.state
    const minutes = Math.floor(timerElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderStopwatchTimer = () => {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="timer-container">
        <div className="timer">
          <img
            className="stopwatch-img"
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            alt="stopwatch"
          />
          <p className="timer-text">Timer</p>
        </div>
        <h1 className="countdown">{time}</h1>
        <div className="buttons-container">
          <button
            disabled={isTimerRunning}
            onClick={this.onClickedStart}
            className="start-btn button"
            type="button"
          >
            Start
          </button>
          <button
            onClick={this.onClickedStop}
            className="stop-btn button"
            type="button"
          >
            Stop
          </button>
          <button
            onClick={this.onClickedReset}
            className="reset-btn button"
            type="button"
          >
            Reset
          </button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Stopwatch</h1>
          {this.renderStopwatchTimer()}
        </div>
      </div>
    )
  }
}

export default Stopwatch
