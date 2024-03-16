import { Component } from 'react';

class MemeItem extends Component {
  render() {
    return (
      <div>
        <img src={this.props.meme.url} alt={this.props.meme.name} />
        <p>{this.props.meme.name}</p>
      </div>
    );
  }
}

export default MemeItem;
