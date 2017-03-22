import React,{ PropTypes } from 'react';
import { List, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';

function Swq ({
open1,open2,openChange1,openChange2

}) {

  return (
      <List renderHeader={() => '表单开关项'} >
        <List.Item  
        extra={<Switch  checked={open1} onChange={()=>openChange1()} />}
        >默认开</List.Item>
        <List.Item
          extra={<Switch 
          checked={open2} onChange={()=>openChange2()}
          />}
        >默认关</List.Item>
        <List.Item
          extra={<Switch
            
            disabled
          />}
        >默认关不可修改</List.Item>
        <List.Item
          extra={<Switch
            checked="checked"
            disabled
          />}
        >默认开不可修改</List.Item>
      </List>
    );
};

Swq.propTypes = {
};

export default createForm()(Swq);
