import { Component } from 'react';

class MemeItem extends Component {
  constructor() {
    super();
    this.state = {
      hovered: false,
    };
  }

  render() {
    return (
      <div
        className='meme-item'
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
      >
        <img
          src={this.props.meme.url}
          alt={this.props.meme.name}
          className={
            this.state.hovered 
            ? 'meme-image darken-image' 
            : 'meme-image'
          }
        />
        <p className={this.state.hovered 
          ? 'meme-text' 
          : 'no-text'}>
          {this.props.meme.name}
        </p>
      </div>
    );
  }
}

export default MemeItem;
