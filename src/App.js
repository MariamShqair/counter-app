import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Containers from "./components/counters";

class App extends Component {
  //state just read only insid the componet we initialize inside
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  //Mount Phase has 3 life cycle
  //1- constructor
  constructor() {
    super();
    console.log("App - Constructor");
  }
  //2-componentDidMount we use for ajax call to get data from the server

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = () => {
    this.state.counters.forEach(counter => (counter.value = 0));
    this.setState(this.state.counters);
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Containers
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onDecrement={this.handleDecrement}
        />

        <main className="container" />
      </React.Fragment>
    );
  }
}

export default App;
