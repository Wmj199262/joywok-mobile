import React,{ PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'dva/router';
import { connect } from 'react-redux';
import { Button, Flex ,Icon} from 'antd-mobile';
import  './button.css';

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
            <Button className="btn" data-seed="logId" type="warning" activeStyle={false}>warning 按钮</Button>
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
          
          <div style={{ height: '0.16rem' }} />
         
          <p style={{ margin: 10, color: '#999' }}>inline / small</p>
            <Flex style={{ marginBottom: '0.16rem' }}>
              <Button inline style={{ marginRight: '0.08rem' }}>inline</Button>
              <Button inline size="small">inline small</Button>
            </Flex>
        </div>
      </div>
    );
  },
});




export default connect()(Test);
