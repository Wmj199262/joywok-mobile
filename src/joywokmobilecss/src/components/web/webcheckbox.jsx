import React,{ PropTypes } from 'react';

import { Card, Flex ,Icon,WhiteSpace,List,Checkbox} from 'antd-mobile';


const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

function checkbox ({value=1,}) {


 const data = [
      { value: 0, label: '博士' },
       { value: 1, label: '本科' },
        { value: 2, label: '初中' },
    ];
 function onChange(value){
    console.log(value);
    };
    return (<div>
      <List renderHeader={() => 'CheckboxItem 演示'}>
        {data.map(i => (
          <CheckboxItem key={i.value} onChange={() => onChange(i.value)}>
            <span>{i.label}</span>
          </CheckboxItem>
        ))}
        <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
          初中<List.Item.Brief>辅助文字内容</List.Item.Brief>
        </CheckboxItem>
      </List>
      <Flex style={{ padding: 30 }}>
        <Flex.Item style={{ padding: '30px 0', color: '#888', flex: 'none' }}>Checkbox 演示</Flex.Item>
        <Flex.Item>
          <Checkbox>选项一</Checkbox>
          <Checkbox style={{ marginLeft: 10 }}>选项二</Checkbox>
        </Flex.Item>
      </Flex>
      <Flex style={{ padding: 30 }}>
        <Flex.Item>
          <AgreeItem data-seed="logId" onChange={(e) => console.log('checkbox', e)}>
            已阅读协议<a onClick={(e) => { e.preventDefault(); alert('打开协议'); }}>《协议链接》</a>
          </AgreeItem>
        </Flex.Item>
      </Flex>
    </div>);
};

checkbox.propTypes = {
};

export default checkbox;
