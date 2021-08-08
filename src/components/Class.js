import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Mouted!");
  }

  componentDidUpdate() {
    console.log("Updated!");
  }

  componentWillUnmount() {
    console.log("cleanup");
  }

  clickedButton() {
    this.setState({ count: this.state.count + 1 });
    console.log("clicked");
    this.props.destroy(false);
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button
          className="btn btn-primary"
          onClick={() => this.clickedButton()}
        >
          Click me!
        </button>
      </div>
    );
  }
}

export default Test;
