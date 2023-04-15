import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClick: false}

  isClicked = () => this.setState({isClick: true})

  renderFeedbackQuestions() {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="card">
        <h1 className="description">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(emoji => (
            <li className="card" key={emoji.id}>
              <button className="btn" type="button" onClick={this.isClicked}>
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <br />
                <span className="name"> {emoji.name} </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <ul className="card">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="description"> Thank You! </h1>
        <p className="para">
          {' '}
          We will use your feedback to improve our customer support performance.{' '}
        </p>
      </ul>
    )
  }

  render() {
    const {isClick} = this.state

    return (
      <div className="bg-container">
        {isClick ? this.renderThankYouScreen() : this.renderFeedbackQuestions()}
      </div>
    )
  }
}

export default Feedback
