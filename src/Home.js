/*jshint esversion: 6 */
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import YourTasks from './YourTasks';
import YourPrescriptions from './YourPrescriptions';
import YourRecentOrders from './YourRecentOrders';
import YourHealthPlan from './YourHealthPlan';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
		<div className="row pt-2">
			<div className="col-12">
				<a href=""><h4 className="small text-right">Go to the Full Site <i>&gt;</i></h4></a>
			</div>
		</div>
		<div className="row">
		<main className="col">
		<YourTasks />
		      <hr/>
		<YourPrescriptions />
		      <hr/>
		<YourRecentOrders />
		</main>
		<aside className="col-12 col-lg-4 mb-2">
	  		<YourHealthPlan />
	    </aside>
		</div>
      </div>
	  
    );
  }
}

export default Home;
