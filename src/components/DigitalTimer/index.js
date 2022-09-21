// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {
    isDigitalTimer: false,
    count: 25,
    clockCount: 25 * 60,
  }

  resetBtn = () => {
    clearInterval(this.timerId)
    this.setState({
      isDigitalTimer: false,
      count: 25,
      clockCount: 25 * 60,
    })
  }

  seconds = () => {
    const {clockCount} = this.state
    const seconds = Math.floor(clockCount % 60)
    if (seconds > 10) {
      return seconds
    }
    return `0${seconds}`
  }

  minute = () => {
    const {clockCount} = this.state
    const valuMinute = Math.floor(clockCount / 60)

    if (clockCount > 10) {
      return valuMinute
    }
    return `0${valuMinute}`
  }

  tick = () => {
    this.setState(prevState => ({clockCount: prevState.clockCount - 1}))
  }

  onChangeStatus = () => {
    const {isDigitalTimer} = this.state
    this.setState(prevState => {
      const {newTimer} = prevState
      return {
        isDigitalTimer: !isDigitalTimer,
      }
    })
    if (isDigitalTimer === false) {
      this.timerId = setInterval(this.tick, 1000)
    } else {
      clearInterval(this.timerId)
    }
  }

  onTimeEnd = time => {
    if (time === '00:00') {
      clearInterval(this.timerID)
    }
    console.log(time)
  }

  onIncrement = () => {
    const {isDigitalTimer} = this.state
    if (isDigitalTimer === false) {
      this.setState(prevState => ({
        count: prevState.count + 1,
        clockCount: prevState.clockCount + 60,
      }))
    }
  }

  onDecrement = () => {
    const {isDigitalTimer} = this.state
    if (isDigitalTimer === false) {
      this.setState(prevState => ({
        count: prevState.count - 1,
        clockCount: prevState.clockCount - 60,
      }))
    }
  }

  render() {
    const {isDigitalTimer, count} = this.state
    const time = `${this.minute()} : ${this.seconds()}`
    this.onTimeEnd(time)
    return (
      <div className="digital-clock-container">
        <h1>Digital Timer</h1>
        <div className="digital-container">
          <div className="timing-pause-container">
            <div className="time-duration-result-text">
              <h1 className="time">{time}</h1>
              <p className="running-passed">
                {!isDigitalTimer ? 'Paused' : 'Running'}
              </p>
            </div>
          </div>
          <div className="pass-reset-setTime-container">
            <div className="pass-rest-container">
              <button
                className="button"
                type="button"
                onClick={this.onChangeStatus}
              >
                {isDigitalTimer ? (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                    alt="pause icon"
                  />
                ) : (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                    alt="play icon"
                  />
                )}
                <p className="strt-passed">
                  {!isDigitalTimer ? 'Start' : 'Pause'}
                </p>
              </button>
              <button className="button" type="button" onClick={this.resetBtn}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                />
                <p className="strt-passed">Reset</p>
              </button>
            </div>
            <p className="setTimeLimit">Set Timer limit</p>
            <div className="set-time-limit-digit">
              <button type="button" onClick={this.onDecrement}>
                <p>-</p>
              </button>
              <p className="max-25">{count}</p>
              <button type="button" onClick={this.onIncrement}>
                <p>+</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
