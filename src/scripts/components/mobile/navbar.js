
import React,{ PropTypes } from 'react';
import { Link } from 'dva/router';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { NavBar,Icon } from 'antd-mobile';


const navBarExample = React.createClass({
  render() {
    return (<div className="example">
     <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">NavBar</h1>                               
        </div>                                  
       </div>
    <NavBar leftContent="返回" iconName="null" mode="light" onLeftClick={() => console.log('onLeftClick')}
     rightContent="下一步"
    >NavBar</NavBar>
  </div>);
  },
});

export default connect()(navBarExample);