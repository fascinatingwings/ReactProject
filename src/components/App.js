import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, newNumber, changeNumbers } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter
          count={this.props.count}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          onNewNumber={this.props.onNewNumber}
          onChangeNumbers={this.props.onChangeNumbers}
          clickCount={this.props.clickCount}
          searchNumber={this.props.searchNumber} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onNewNumber: (number) => dispatch(newNumber(number)),
    onChangeNumbers: () => dispatch(changeNumbers())
  };
}
function mapStateToProps(state) {
  return {
    count: state.count,
    clickCount: state.clickCount,
    searchNumber: state.searchInputted
  };
} //allows you to loop through info, like an array. This is a higher order function and will call in another function.

export default connect(mapStateToProps, mapDispatchToProps)(App); // connect is taking in a function and returning mapDispatchToProps function.


//reset
//onReset={this.props.onReset}
//onReset: () => dispatch(reset())
// ReactDOM.render(<App />, document.getElementById('root')); //I don't need this?