import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    //using Destructuring Argument rather than repeate this.props
    const {
      onReset,
      onDelete,
      onIncrement,
      onDecrement,
      counters
    } = this.props;
    console.log("Counters - Rendered");
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          //property in key , value , id is read ohly we cannt change
          //value =0 this will give error
          <Counter
            //bubble or rasing to handle by App component
            key={counter.id}
            onDelete={onDelete}
            counter={counter} //this prop have all info about counter obj
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
