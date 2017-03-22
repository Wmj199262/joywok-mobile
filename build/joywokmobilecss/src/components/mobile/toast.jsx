import { Link } from 'dva/router';
import React,{ PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

function showToast() {
  Toast.info('享邮推送成功', 100);
}

function successToast() {
  Toast.success('享邮推送成功', 100);
}

const ToastExample = React.createClass({
  render() {
    return (
     <div className="example">
      <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">Toast</h1>                               
        </div>                                  
       </div>
      <WingBlank>
        <WhiteSpace />
        <Button onClick={showToast}>纯文字 toast</Button>
        <WhiteSpace />
        <Button onClick={successToast}>成功 toast</Button>
      </WingBlank>
     </div> 
    );
  },
});

export default connect()(ToastExample)