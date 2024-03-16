import { Component } from 'react';
import { connect } from 'react-redux';

class MyMemes extends Component {
  render() {
    return (
      <div>
        {this.props.myMemes.length > 0 && <h2>Your Memes:</h2>}
        {this.props.myMemes.map((meme, index) => (
          <img
            key={index}
            src={meme.data.url}
            alt='my-meme'
            className='user-meme-image'
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myMemes: state.myMemes,
  };
}

export default connect(mapStateToProps)(MyMemes);
