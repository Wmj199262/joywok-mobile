
import React,{ PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'dva/router';
import { connect } from 'react-redux';

import { Picker, List, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

import { district, provinceLite as province } from 'antd-mobile-demo-data';

// 如果不是使用 List.Item 作为 children
const CustomChildren = props => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: '#fff', padding: '0 0.3rem' }}
  >
    <div style={{ display: 'flex', height: '0.9rem', lineHeight: '0.9rem' }}>
      <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
      <div style={{ textAlign: 'right', color: '#888' }}>{props.extra}</div>
    </div>
  </div>
);

const data = [{
  value: 'x1',
  label: '选择1',
}, {
  value: 'x2',
  label: '选择2',
}, {
  value: 'x3',
  label: '选择3',
}, {
  value: 'x4',
  label: '选择4',
}, {
  value: 'x5',
  label: '选择5',
}];

let Test = React.createClass({
  render() {
    const { getFieldProps } = this.props.form;
    return (<div className="example">
      <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">Select</h1>                               
        </div>                                  
       </div>
      <WhiteSpace size="lg" />
      <List style={{ backgroundColor: 'white' }} className="picker-list">
       
        <Picker data={data} cols={1} {...getFieldProps('district3')} className="forss"  extra="请选择">
          <List.Item arrow="horizontal">选择地区（单列）</List.Item>
        </Picker>
        
      </List>
    </div>);
  },
});

Test = createForm()(Test);

export default connect()(Test)