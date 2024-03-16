import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import '../styles/index.css';
import MemeItem from './MemeItem';

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
      <div className='container'>
        <h1>Meme Maker</h1>
        <div className='row'>
          {this.props.memes
            .slice(0, this.state.memeLimit)
            .map((meme, index) => {
              return <MemeItem key={index} meme={meme} />;
            })}
        </div>
        <div className='row mt-3'>
          <div className='col text-center'>
            <Button
              className='meme-button btn-lg'
              variant='primary'
              onClick={this.loadMoreMemes}
            >
              Load 10 More Memes
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);
