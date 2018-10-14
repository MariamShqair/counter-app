import React, { Component } from "react";

class Counter extends Component {
  //for Single Source of Truth we need remove the local state
  // state = {
  //   //setting Attributes
  //   value: this.props.counter.value,
  //   imageUrl: "https://picsum.photos/200",
  //   tags: ["tag1", "tag2", "tag3"]
  // };
  //binding Event Handlers using constructor or func Arrows =>
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  handleIncrement = product => {
    console.log(product);
    // updating the state by using
    this.setState({ value: this.props.counter.value + 1 });
  };
  //update phase have 2 life cycle componentDidUpdate ,render
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }
  //Unmounting Phase have one life cycle componentWillUnmount
  componentWillUnmount() {
    // we will see the Unmount message when make delete any instance
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");
    /* Rendering class Dynamically */
    //I use refactoring ctrl+shift+R to make new method and copy code inside

    //calss have props we can print each time we call
    // {
    //   this.props.children;
    // }
    //console.log("props", this.props);
    return (
      //to make root div the main div we use React.Fragment
      //we can use {} to render values dynamically
      <div className="row">
        {/* <img src={this.props.counter.imageUrl} alt="" /> */}

        {/* we cannt use class prop because it reserved key in js we use className */}
        {/* we can call style as attribut style={this.styles}
            or we could style={{ fontSize: 30 }}
        */}
        {/* Rendering class Dynamically this.getBadgeClasses() */}

        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          {/* handling events using onClick prop */}
          <button
            // passing event argument by using ()=> arrow func
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm "
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="button btn btn-secondary m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm "
          >
            x
          </button>

          {/* rendering lists */}
          {/* <ul>
          {this.props.counter.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        </div>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = " badge m-2  badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //we ust Distruction object
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
