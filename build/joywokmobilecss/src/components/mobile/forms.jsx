import React,{ PropTypes } from 'react';
import { Link } from 'dva/router';
import { List, InputItem,Button } from 'antd-mobile';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createForm } from 'rc-form';
import  './button.css';
const Item = List.Item;


let FormExample = React.createClass({
  
  render() {
  return (
  <div className="example">
     <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">Form</h1>                               
        </div>                                  
       </div>
     <form>
     <List>
      <InputItem
        placeholder="帐号"
        data-seed="logId"
      ></InputItem>
       <InputItem
        placeholder="密码"
        data-seed="logId"
      ></InputItem>
       <InputItem
        placeholder="验证码"
        data-seed="logId"
      >
      </InputItem>     
     <Item
          extra={<Button className="btn" type="primary">primary 按钮</Button>  }
        ></Item>   
  </List>
  </form>
   <form className="inline">
     <List>
     <InputItem
        placeholder="请输入"
        data-seed="logId"
      >标题</InputItem>
      <InputItem
        placeholder="请输入"
        data-seed="logId"
      >标题</InputItem>
       <InputItem
        placeholder="请输入"
        data-seed="logId"
      >标题</InputItem>    
     <Item
          extra={<Button className="btn" type="primary">primary 按钮</Button>  }
        ></Item>   
  </List>
  </form>
   <form className="stacked">
     <List>
      <InputItem
         prefixListCls="jw"
        placeholder="请输入"
      >标题</InputItem>
       <InputItem
         prefixListCls="jw"
        placeholder="请输入"
      >标题</InputItem>
        <InputItem
         prefixListCls="jw"
        placeholder="请输入"
      >标题</InputItem>   
     <Item
          extra={<Button className="btn" type="primary">primary 按钮</Button>  }
        ></Item>   
  </List>
  </form>
  </div>
);
  },
});

FormExample = createForm()(FormExample);

export default connect()(FormExample)

