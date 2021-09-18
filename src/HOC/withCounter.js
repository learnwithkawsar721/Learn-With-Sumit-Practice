import React from "react";

const withCounter = (OriginCounter) => {
  class NewCounter extends React.Component {
    state = {
      count: 0,
    };
    increment = () => {
      this.setState((state) => ({
        count: state.count + 1,
      }));
    };

    render() {
        const {count} = this.state;
        return <OriginCounter count={count} incrementCount={this.increment} />
    }
  }
  return NewCounter;
};

export default withCounter;
