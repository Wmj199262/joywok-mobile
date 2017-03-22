import React,{ PropTypes } from 'react';
import { Link } from 'dva/router';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

let LoadingExample = React.createClass({

	render(){
		return( 
		   <div className="loading">      
				 <div className="loading-spinner">
				  <div className="spinner-container container1">
				    <div className="circle1"></div>
				    <div className="circle2"></div>
				    <div className="circle3"></div>
				    <div className="circle4"></div>
				  </div>
				  <div className="spinner-container container2">
				    <div className="circle1"></div>
				    <div className="circle2"></div>
				    <div className="circle3"></div>
				    <div className="circle4"></div>
				  </div>
				  <div className="spinner-container container3">
				    <div className="circle1"></div>
				    <div className="circle2"></div>
				    <div className="circle3"></div>
				    <div className="circle4"></div>
				  </div>
				</div>
				<div className="loading-bounce">
			        <span></span>
			        <span></span>
			        <span></span>
			        <span></span>
			        <span></span>
				</div>
				<div className="loading-wrap">
					<div className="loading-circle" >
	                  	<div className="load-round"></div>
	       			</div>
       			</div>
            </div>
			)
	}
})

export default connect()(LoadingExample)