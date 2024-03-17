import { Component } from 'react';
import { connect } from 'react-redux';
import { createMeme } from '../actions';

class MemeItem extends Component {
  constructor() {
    super();
    this.state = {
      hovered: false,
    };
    this.handleMemeClick = this.handleMemeClick.bind(this);
  }

  postMeme() {
    const { text0, text1 } = this.props;
    const memeObj = {
      template_id: this.props.meme.id,
      text0,
      text1,
    };
    this.props.createMeme(memeObj);
  }

  isTextFilled() {
    return this.props.text0 || this.props.text1;
  }

  handleMemeClick() {
    if (this.isTextFilled()) {
      this.postMeme();
    } else {
      console.log('Please enter text before generating the meme!');
    }
  }

  render() {
    return (
      <div
        className='meme-item'
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onClick={this.handleMemeClick}
      >
        <img
          src={this.props.meme.url}
          alt={this.props.meme.name}
          className={
            this.state.hovered ? 'meme-image darken-image' : 'meme-image'
          }
        />
        <p className={this.state.hovered ? 'meme-text' : 'no-text'}>
          {this.props.meme.name}
        </p>
      </div>
    );
  }
}

export default connect(null, { createMeme })(MemeItem);
