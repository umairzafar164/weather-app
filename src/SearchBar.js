import React from "react";
import { fetchTemp } from "./actions";
import { connect } from "react-redux";
import Display from "./display";

class SearchBar extends React.Component {
  state = { text: "" };
  onSubmit = () => {
    this.props.fetchTemp(this.state.text);
  };
  
  render() {
    return (
      <div>
        <div className="ui input focus">
          <input
            onChange={(e) => this.setState({ text: e.target.value })}
            type="text"
            placeholder="Enter City"
          />
          <button onClick={this.onSubmit} className="ui button primary">
            Submit
          </button>
        </div>
        <Display city={this.state.text} temperature={this.props.temp} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { temp: state.temperature };
};
export default connect(mapStateToProps, { fetchTemp })(SearchBar);

     /*   <div>
          <h1>
            The temperature is :{this.props.temp}
          </h1>
        </div>
        */