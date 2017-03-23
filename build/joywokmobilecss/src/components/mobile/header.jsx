import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Drawer, List, NavBar ,NoticeBar,WhiteSpace,Accordion} from 'antd-mobile';
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
      key:'tabs', 
       path:'/mobile/tabs',       
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
      key:'switch',  
       path:'/mobile/switch',      
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
  }];


  


return(
  <div style={{ marginTop: 10, marginBottom: 10 }} className="example">
      <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link   to="/jma-site/Jma-Framework/mobilecsscomponents/index.html">
            <button type="button" className="btn">CSS 组件</button>
         </Link>                                   
          <Link to="/jma-site/index.html">
           <button type="button" className="btn right">JS 组件</button>
          </Link>                                      
          <h1 className="ellipsis">JMF-Demo-List</h1>                               
         </div>                                  
        </div>
        <Accordion  className="my-accordion">
          <Accordion.Panel header="导航">
            <List className="my-list">
               {navData.map((i, index) => {
               return (
                 <Item  arrow="horizontal" onClick={() => {}} key={index}><Link   to={i.path}>{i.key}</Link></Item>
                );
               })}
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="数据录入" >
            <List className="my-list">
               {DataEntry.map((i, index) => {
               return (
                  <Item arrow="horizontal" onClick={() => {}} key={index}><Link to={i.path}>{i.key}</Link></Item>
                );
               })}
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="数据展示" className="pad">
           <List className="my-list">
               {DataDisplay.map((i, index) => {
               return (
                 <Item arrow="horizontal" onClick={() => {}} key={index}><Link to={i.path}>{i.key}</Link></Item>
                );
               })}
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="操作反馈" >
            <List className="my-list">
               {Feedback.map((i, index) => {
               return (
                <Item arrow="horizontal" onClick={() => {}} key={index}><Link to={i.path}>{i.key}</Link></Item>
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
