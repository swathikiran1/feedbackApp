// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  onGiveFeedback = () => {
    this.setState({isFeedbackGiven: true})
  }

  render() {
    const {isFeedbackGiven} = this.state

    const containerValue1 = isFeedbackGiven
      ? 'feedback-container1'
      : 'feedback-container2'
    const containerValue2 = isFeedbackGiven
      ? 'feedback-container2'
      : 'feedback-container1'

    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        <div className="emoji-container">
          <div className={containerValue1}>
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojis-list">
              {emojis.map(eachItem => (
                <li key={eachItem.id}>
                  <img
                    src={eachItem.imageUrl}
                    alt={eachItem.name}
                    className="emoji"
                    onClick={this.onGiveFeedback}
                  />
                  <p className="name">{eachItem.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={containerValue2}>
            <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
            <h1 className="heading1">Thank You!</h1>
            <p className="description">
              We will lose your feedback to improve our customer support
              performance.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
