import React from "react";
class Display extends React.Component {
  render() {
    if (this.props.cities) {
      return (
        <div>
          <table class="ui celled table">
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature</th>
              </tr>
            </thead>
            <tbody>
             {this.props.cities.map((city,index)=><tr>
               <td>{city}</td>
               <td>{this.props.temps[index]}</td>
             </tr>)}
            </tbody>
          </table>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default Display;
