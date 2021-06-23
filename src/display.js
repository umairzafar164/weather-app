import React from "react";
class Display extends React.Component {
  render() {
    if (this.props.temperature) {
      return (
        <div>
          <h1>{`Temperature in ${this.props.city} is ${this.props.temperature}`}</h1>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default Display;
