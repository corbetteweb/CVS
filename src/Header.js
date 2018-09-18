/*jshint esversion: 6 */
import React, {Component} from 'react';
import logo from './images/svgs/CVS-Caremark-Logo.svg';
import logo2 from './images/svgs/CVS-Caremark-Logo-mobile.svg';

class Header extends Component {
	render() {
		return ( 
			<header className= "main pb-2">
				<div className= "buffer invisible"> <p></p></div>
				<div className= "row" > 
					<img className= "col-4 d-sm-none d-md-block pb-2" src= {logo} alt= "CVS caremark logo" /> 
				</div> 
				<nav className= "navbar fixed-top ft-mobile-only navbar-expand-lg navbar-dark bg-dark bg-dark-sm d-sm-none d-md-block d-lg-block d-xl-block" > 
					<a className = "navbar-brand col-6 pl-0  d-sm-block d-md-none" href= "" ><img className= "col pl-0 pr-0" src = {logo2} alt= "CVS Logo" /></a> 
					<button className= "navbar-toggler" type= "button" data-toggle= "collapse" data-target= "#navbarSupportedContent" aria-controls= "navbarSupportedContent" aria-expanded= "false" aria-label= "Toggle navigation" > <span className = "navbar-toggler-icon"> </span> </button>
					<div className= "collapse navbar-collapse" id= "navbarSupportedContent" >
						<ul className= "navbar-nav mr-auto" >
							<li className= "nav-item active">
								<a className= "nav-link" href= ""> Home <span className= "sr-only"> (current) </span></a> 
							</li> 
							<li className= "nav-item"> 
								<a className= "nav-link" href= ""> Perscription </a> 
							</li>
							<li className= "nav-item"> 
								<a className= "nav-link" href= ""> Plan & Benefits </a> 
							</li>
						</ul> 
					</div> 
				</nav> 
			</header>
		);
	}
}

export default Header;
