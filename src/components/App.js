import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import '../styles/index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      memeLimit: 10,
    };
    this.loadMoreMemes = this.loadMoreMemes.bind(this);
  }

  loadMoreMemes() {
    this.setState({ memeLimit: this.state.memeLimit + 10 });
  }

  render() {
    return (
      <div>
        <h1>Meme Maker</h1>
        {this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return <h2 key={index}>{meme.name}</h2>;
        })}
        <Button variant='primary' onClick={this.loadMoreMemes}>
          Load 10 More Memes
        </Button>{' '}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);
