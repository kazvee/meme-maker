import { Component } from 'react';
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import '../styles/index.css';
import MemeItem from './MemeItem';
import MyMemes from './MyMemes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      memeLimit: 10,
      text0: '',
      text1: '',
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
              return (
                <MemeItem
                  key={index}
                  meme={meme}
                  text0={this.state.text0}
                  text1={this.state.text1}
                />
              );
            })}
        </div>
        <h2>Make your Meme:</h2>
        <MyMemes />
        <p>Enter caption text, then click an image!</p>
        <div className='row justify-content-center'>
          <Form className='form-check-inline'>
            <FormGroup>
              <FormLabel>Top Text</FormLabel>
              <FormControl
                type='text'
                onChange={(e) => {
                  this.setState({ text0: e.target.value });
                }}
                name='topText'
                placeholder='Enter top text'
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Bottom Text</FormLabel>
              <FormControl
                type='text'
                onChange={(e) => {
                  this.setState({ text1: e.target.value });
                }}
                name='bottomText'
                placeholder='Enter bottom text'
              />
            </FormGroup>
          </Form>
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
