import { Component } from 'react';

class MemeItem extends Component {
  constructor() {
    super();
    this.state = {
      hovered: false,
    };
  }

  postMeme() {
    console.log('this.props', this.props);
  }

  render() {
    return (
      <div
        className='meme-item'
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        onClick={() => this.postMeme()}
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

export default MemeItem;
