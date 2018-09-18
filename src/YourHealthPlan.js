/*jshint esversion: 6 */
import React, { Component } from 'react';
import deductableData from './json/healthplan.json';

class YourHealthPlan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "Enter drug name",
		};
	}
  render() {
	  const percent= ((deductableData[0].balance / deductableData[0].total) * 100) + "%";
    
	  return (
 	  <section className="health-plan-module card">
        <div className="card-body">
          <article className="text-center">
            <h2>Your Health Plan</h2>
            <p>Individual Deductible</p>
            <div className="progress-container">
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width:percent}} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="progress-bar-shaper"></div>
            </div>
		  	  <div className="row progress-dollars">
		  		<div className="col-6">$0 &nbsp;</div>
		  		<div className="col-6">${deductableData[0].total}</div>
		  	  </div>
            <p>until your $<span>{deductableData[0].total - deductableData[0].balance}</span> deductible is met</p>
          </article>
          <p><a className="alert-link" href="">Your insurance coverage details <i>&gt;</i></a></p>
          <p><a className="alert-link" href="">Your copay details <i>&gt;</i></a></p>
        </div>
      </section>
	);
  }
}

export default YourHealthPlan;
