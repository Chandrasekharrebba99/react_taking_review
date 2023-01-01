// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {resources: this.props, flag: true}

  clickhappened = () => {
    this.setState({flag: false})
  }

  render() {
    const {resources, flag} = this.state
    const {loveEmojiUrl} = resources.resources
    console.log(loveEmojiUrl)

    return (
      <div className="topcont">
        {flag ? (
          <div className="card">
            <h1>How satisfied are you with our customer support performance</h1>
            <div className="emojicont">
              {resources.resources.emojis.map(arr => (
                <li key={arr.id} className="card">
                  <button type="button" onClick={this.clickhappened}>
                    <img src={arr.imageUrl} alt={arr.name} />
                  </button>

                  <p>{arr.name}</p>
                </li>
              ))}
            </div>
          </div>
        ) : (
          <div className="thanks card">
            <img src={loveEmojiUrl} alt="love emoji" />
            <h1>Thank you</h1>
            <p>We will use your feedback to improve our customer support</p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
