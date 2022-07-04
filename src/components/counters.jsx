import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;
    return (
      <div>
        {counters.map((c) => (
          <Counter
            key={c.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={c}
          />
        ))}
        <button
          onClick={onReset}
          className="btn btn-outline-primary btn-sm m-2"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
