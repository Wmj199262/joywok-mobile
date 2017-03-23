import React,{ PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'dva/router';
import { connect } from 'react-redux';
import { List ,InputItem} from 'antd-mobile';

import { createForm } from 'rc-form';
import  './button.css';

let InputExample = React.createClass({
  
  render() {
  const { getFieldProps } = this.props.form;
  return (
     <div className="input-container">
     <div className="example">
       <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">Input</h1>                               
        </div>                                  
       </div>
     </div>
     <List>
       <InputItem
            className="jw-inline"
          {...getFieldProps('autofocus')}
          clear
          placeholder="自动获取光标"
        >标题</InputItem>
      <InputItem
        placeholder="请输入"
        data-seed="logId"
      >标题</InputItem>
      <InputItem
         prefixListCls="jw"
        placeholder="请输入"
      >标题</InputItem>

      <InputItem
        {...getFieldProps('inputclear')}
        clear
        placeholder="输入会显示清除按钮"
      >标题</InputItem>

      <InputItem
        placeholder="无 label"
         data-seed="logId"
      ></InputItem>
      <InputItem
         prefixListCls="jw-statcked"
        placeholder="带有图标的input"
      >
        <i className="fa fa-search"></i>
      </InputItem>

     
  </List>
     </div>);
  },
});
InputExample = createForm()(InputExample);

export default connect()(InputExample)
