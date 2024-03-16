import { Component } from 'react';

class MemeItem extends Component {
  render() {
    return (
      <div className='meme-item'>
        <img
          src={this.props.meme.url}
          alt={this.props.meme.name}
          className='meme-image'
        />
        <p className='meme-text'>{this.props.meme.name}</p>
      </div>
    );
  }
}

export default MemeItem;
