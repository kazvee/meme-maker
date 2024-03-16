import { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();

    this.state = {
      memeLimit: 10,
    };
  }

  render() {
    return (
      <div>
        <h1>Meme Maker</h1>
        {this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return <h2 key={index}>{meme.name}</h2>;
        })}
        <div
          onClick={() => {
            this.setState({ memeLimit: this.state.memeLimit + 10 });
          }}
        >
          Load 10 More Memes
        </div>{' '}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);
