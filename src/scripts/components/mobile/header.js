import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import {Accordion,List} from 'antd-mobile';




const Item = List.Item;


let Header=React.createClass({
render(){



const navData=[{
      key:'navBar',
       path:'/mobile/navbar',        
  },{
      key:'tabsbar', 
       path:'/mobile/tabsbar',       
  },{
      key:'segment', 
       path:'/mobile/segment',       
  }];

 const DataEntry=[{
      key:'button',  
      path:'/mobile/button',   
  },{
      key:'input', 
       path:'/mobile/input',       
  },{
      key:'textarea', 
       path:'/mobile/textarea',       
  },{
      key:'select', 
       path:'/mobile/select',       
  },{
      key:'datepicker', 
       path:'/mobile/datepicker',       
  },{
      key:'toggle',  
       path:'/mobile/toggle',      
  },{
      key:'checkBox',  
      path:'/mobile/checkbox',      
  },{
      key:'radio',  
       path:'/mobile/radio',      
  },{
      key:'form', 
      path:'/mobile/form',       
  },{
      key:'search', 
       path:'/mobile/search',       
  }];

const DataDisplay=[{
      key:'list', 
        path:'/mobile/list',     
  },{
      key:'cards', 
       path:'/mobile/cards',       
  }];

  const Feedback=[{
      key:'actionsheet', 
       path:'/mobile/actionsheet',       
  },{
      key:'dialog', 
       path:'/mobile/dialog',       
  },{
      key:'toast', 
       path:'/mobile/toast',       
  },{
      key:'loading', 
       path:'/mobile/loading',       
  }];


  


return(
  <div style={{ marginBottom: 10 }} className="example">
      <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <a href="/jma-site/Jma-Framework/mobilecsscomponents/index.html">
            <button type="button" className="btn">CSS 组件</button>
         </a>                                   
          <a href="/jma-site/index.html">
           <button type="button" className="btn right">JS 组件</button>
          </a>                                      
          <h1 className="ellipsis">JMF-Demo-List</h1>                               
         </div>                                  
        </div>
        <Accordion  className="my-accordion">
          <Accordion.Panel header="导航" className="accordion-nav">
            <List className="my-list">
               {navData.map((i, index) => {
               return (
                 <Link   to={i.path}><Item  arrow="horizontal" onClick={() => {}} key={index}>{i.key}</Item></Link>
                );
               })}
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="数据录入"  className="accordion-dataentry">
            <List className="my-list">
               {DataEntry.map((i, index) => {
               return (
                 <Link   to={i.path}><Item  arrow="horizontal" onClick={() => {}} key={index}>{i.key}</Item></Link>
                );
               })}
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="数据展示" className="pad" className="accordion-datashow">
           <List className="my-list">
               {DataDisplay.map((i, index) => {
               return (
                 <Link   to={i.path}><Item  arrow="horizontal" onClick={() => {}} key={index}>{i.key}</Item></Link>
                );
               })}
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="操作反馈" className="accordion-datafeedback">
            <List className="my-list">
               {Feedback.map((i, index) => {
               return (
                 <Link   to={i.path}><Item  arrow="horizontal" onClick={() => {}} key={index}>{i.key}</Item></Link>
                );
               })}
            </List>
          </Accordion.Panel>
        </Accordion>
      </div>
);
  },
});



export default connect()(Header);
