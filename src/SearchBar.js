import React from "react";
import { fetchTemp } from "./actions";
import { connect } from "react-redux";
var text = "";
class SearchBar extends React.Component {
  onSubmit = () => {
    this.props.fetchTemp(text);
  };
  render() {
    
    return (
      <div>
        <div className="ui input focus">
          <input
            onChange={(e) => (text = e.target.value)}
            type="text"
            placeholder="Enter City"
          />
          <button onClick={this.onSubmit} className="ui button primary">
            Submit
          </button>
        </div>
        <div>
          <h1>The temperature is :{this.props.temp} </h1>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { temp: state.temperature.data.current.temperature };
};
export default connect(mapStateToProps, { fetchTemp })(SearchBar);
