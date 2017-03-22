import React,{ PropTypes } from 'react';
import { Link } from 'dva/router';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { List, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';
import  './button.css';

let SwitchExample = React.createClass({
  onClick() {
    console.log(this.props.form.getFieldsValue());
  },
  render() {
    const { getFieldProps } = this.props.form;
    return (
    <div className="example">
      <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">Switch</h1>                               
        </div>                                  
       </div>
      <List
        renderHeader={() => '表单开关项'}
      >
        <List.Item
          extra={<Switch
            {...getFieldProps('Switch1', {
              initialValue: true,
              valuePropName: 'checked',
            })}
          />}
        >默认开</List.Item>
        <List.Item
          extra={<Switch
            {...getFieldProps('Switch2', {
              initialValue: false,
              valuePropName: 'checked',
            })}
          />}
        >默认关</List.Item>
        <List.Item
          extra={<Switch
            {...getFieldProps('Switch3', {
              initialValue: false,
              valuePropName: 'checked',
            })}
            disabled
          />}
        >默认关不可修改</List.Item>
        <List.Item
          extra={<Switch
            {...getFieldProps('Switch4', {
              initialValue: true,
              valuePropName: 'checked',
            })}
            disabled
          />}
        >默认开不可修改</List.Item>
      </List>
      </div>
    );
  },
});

SwitchExample = createForm()(SwitchExample);

export default connect()(SwitchExample)