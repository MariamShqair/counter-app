import React, { Component } from "react";

export default class Conditional extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    // Conditional rendering first way
    if (this.state.tags.length === 0) return <p>there are no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {/* second way of conditional rendering usin && use truthy and falsy
            true && 1 && hello it will return hello
        */}
        {this.state.tags.length === 3 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
}
