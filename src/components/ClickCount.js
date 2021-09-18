import React from "react";

export default class ClickCount extends React.Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <button onClick={increment}>ClickCount {count} time</button>
      </div>
    );
  }
}
