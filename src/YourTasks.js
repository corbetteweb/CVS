/*jshint esversion: 6 */
import React, { Component } from 'react';
import orders from './json/orders.json';

class YourTasks extends Component {
  render() {
    return (
      <article className="row">
        <div className="col-12">
          <h1>Hello Nancy</h1>
          <h2>Your Tasks</h2>
			
			{orders.map((orderDetail, index) => {
				if(orders[index].status === "On Hold"){
					return(
						<section className="card-body pt-0 pb-0" key={orders[index].id}>
							<h4><i className="icon-alert" aria-label="alert indicator"></i>Ask your doctor to contact us </h4>
							<p>Your order is <span className={orders[index].statusType}>{orders[index].status}</span> because we need some additional information about the prescription listed</p>
						</section>
					)
				} else { return(null)}
			})}
        </div>
      </article>
		
    );
  }
}

export default YourTasks;
