import React,{ PropTypes } from 'react';
import { Link } from 'dva/router';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createForm } from 'rc-form';

import { List, InputItem, Toast, Stepper, Range, Button, createTooltip } from 'antd-mobile';
const Item = List.Item;

class BasicInput extends React.Component {
  state = {
    value: 1,
  }
  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
      } else {
          Toast.info(this.props.form.getFieldError('account') && this.props.form.getFieldError('account').join(','), 2, null, false);
      }
    });
  }
  onReset = () => {
    this.props.form.resetFields();
  }
  validateAccount = (rule, value, callback) => {
    if (value && value.length > 4) {
      callback();
    } else {
      callback(new Error('帐号至少4个字符'));
    }
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form;

    return (<div  className="example">
       <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">List</h1>                               
        </div>                                  
       </div>
       <form>
        <List renderHeader={() => '验证表单'}
        >
          <InputItem
            {...getFieldProps('account', {
              rules: [
                { required: true, message: '请输入帐号' },
                { validator: this.validateAccount },
              ],
            })}
            clear
            error={!!getFieldError('account')}
            onErrorClick={() => {
              alert(getFieldError('account').join('、'));
            }}
            placeholder="请输入账号"
          >帐号</InputItem>
          <InputItem {...getFieldProps('password')} placeholder="请输入密码" type="password">
            密码
          </InputItem>
          <Item  extra={ <Button className="btn" type="primary" onClick={this.onSubmit} >提交验证</Button>}>
          </Item>
        </List>
    </form> 
    <form>
         <List renderHeader={() => '无验证表单'}>
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
         <Item extra={<Button className="btn" type="primary">下一步</Button>  }></Item>   
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
              extra={<Button className="btn" type="primary">下一步</Button>  }
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
                extra={<Button className="btn" type="primary">下一步</Button>  }
              ></Item>   
       </List>
    </form>
  </div>);
  }
}

const FormExample = createForm()(BasicInput);

export default connect()(FormExample)

