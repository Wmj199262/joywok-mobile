import React,{ PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'dva/router';
import { connect } from 'react-redux';
import { Button,Flex,Icon} from 'antd-mobile';


let Test=React.createClass({
  render() {
    return (
     <div className="btn-container example">
       <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">Button</h1>                               
        </div>                                  
       </div>
        <div style={{ margin: '0 0.16rem' }}>
          <div  className='buttonItem'>
            <Button className="btn" data-seed="logId"  >有点击反馈</Button>
          </div>
          <div className='buttonItem'>
            <Button className="btn" data-seed="logId" type="warning" >warning 按钮</Button>
          </div>
          <div  className='buttonItem'>
            <Button className="btn" data-seed="logId" type="ghost" onClick={e => console.log(e)}>ghost 按钮</Button>
          </div>
          <div  className='buttonItem'>
            <Button className="btn" type="primary">primary 按钮</Button>
          </div>
          <div  className='buttonItem'>
            <Button className="btn" disabled >disabled 按钮</Button>
          </div>
          <div className="buttonItem">
            <Button className="btn" type="primary" data-seed="logId" activeStyle={false} >无点击反馈</Button>
          </div>
        </div>
      </div>
    );
  },
});




export default connect()(Test);
