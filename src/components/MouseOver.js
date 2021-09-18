import React from "react";

export default class MouseOver extends React.Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <h1 onMouseOver={increment}>Hover Count {count} time</h1>
      </div>
    );
  }
}
