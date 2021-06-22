import React from "react";
import {fetchTemp} from './actions';
import {connect} from 'react-redux';
var text='';
class SearchBar extends React.Component {
  onSubmit = () => {
    this.props.fetchTemp(text);
  };
  render() {
    return (
      <div>
        <div className="ui input focus">
          <input
            onChange={(e) =>  text= e.target.value }
            
            type="text"
            placeholder="Enter City"
          />
          <button onClick={this.onSubmit} className="ui button primary">
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default connect(null, {fetchTemp})(SearchBar);
