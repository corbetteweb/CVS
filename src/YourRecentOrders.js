/*jshint esversion: 6 */
import React, { Component } from 'react';
import orders from './json/orders.json';

class YourRecentOrders extends Component {
  render() {
    return (
      <article id="YourRecentOrders" className="row">
        <div className="col-12">
          <h2>{orders.length} Recent Orders</h2>
		  <section className="card-body pt-0 pb-0">
			{orders.map((orderDetail, index) => {
				return(
				  <div className="row pt-1" key={orders[index].id}>
					<div className="col">
						<a href="" className="list-group-item-info"><h5><ins className="order-id">Order #{orders[index].orderNumber}</ins></h5></a>
					</div>
					<div className="col-lg-5">Placed on {orders[index].date} for {orders[index].patient}</div>
					<div className="col">{orders[index].quantity} Rxs</div>
					<div className="col"><span className={orders[index].statusType}>{orders[index].status}</span></div>
				  </div>
				)
			})}
          
         
          <p><a className="alert-link" href="">View recent orders <i>&gt;</i></a></p>
		  </section>
        </div>
      </article>
    );
  }
}

export default YourRecentOrders;
