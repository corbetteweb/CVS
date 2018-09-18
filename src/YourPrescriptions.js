/*jshint esversion: 6 */
import React, { Component } from 'react';

class YourPrescriptions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "Enter drug name",
		};
	}
  render() {
    return (
 	  <div className="row">
        <div className="col-12">
          <h2>Your Prescriptions</h2>
		  <section className="card-body pt-0">
          <h3><a href="">3 Prescriptions Ready for Refill <i>&gt;</i></a></h3>
          <h4>{"Find a new medication"}</h4>
          <div className="btn-group" role="group">
			<input className="rx-search-field pl-2 col" alt="Enter drug name in this field" type="text" value={this.state.value} onClick = {() => this.setState({value:" "})} onChange = {() => this.setState({value:'X'})} />
            <input className="rx-search-btn btn-danger btn-lg btn" alt="submit search" type="submit" value="Search"/>
		  </div>
		  </section>
        </div>
      </div>
	);
  }
}

export default YourPrescriptions;
