import React from "react";
import { fetchTemp } from "./actions";
import { connect } from "react-redux";

class SearchBar extends React.Component {
  state = { city: "", temp: null, cityList: [], tempList: [] };
  onSubmit = () => {
    this.props.fetchTemp(this.state.city);
  };
  table = () => {
    this.setState({
      cityList: [...this.state.cityList, this.state.city],
      tempList: [...this.state.tempList, this.props.temp],
      city: "",
      temp: null,
    });
  };

  render() {
    return (
      <div>
        <div className="ui input focus">
          <input
            onChange={(e) => this.setState({ city: e.target.value })}
            type="text"
            placeholder="Enter City"
            value={this.state.city}
          />
          <button onClick={this.onSubmit} className="ui button primary">
            Submit
          </button>
        </div>
        <div>
          <h2>
            The temperature is {this.props.temp}
          </h2>
        </div>
        <br></br>
        <button className='ui button green' onClick={this.table}>List it in table</button>
        <div>
          <table class="ui celled table">
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature</th>
              </tr>
            </thead>
            <tbody>
              {this.state.cityList.map((city, index) => (
                <tr>
                  <td>{city}</td>
                  <td>{this.state.tempList[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        );
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    temp: state.temperature,
  };
};
export default connect(mapStateToProps, { fetchTemp })(SearchBar);
