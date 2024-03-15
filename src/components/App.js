import { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Meme Maker</h1>
        {this.props.memes.map((meme, index) => {
          return <h2 key={index}>{meme.name}</h2>;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);
