import React,{ PropTypes } from 'react';
import { Link } from 'dva/router';
import { Card, Flex ,Icon,WhiteSpace,List,Checkbox} from 'antd-mobile';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

const checkboxTest = React.createClass({
  onChange(val) {
    console.log(val);
  },
  render() {
    const data = [
      { value: 0, label: '博士' },
      { value: 1, label: '本科' },
      { value: 2, label: '高中' },
    ];
    return (<div className="example">
      <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">Checkbox</h1>                               
        </div>                                  
       </div>
      <List renderHeader={() => 'CheckboxItem 演示'}>
        {data.map(i => (
          <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
            <img src="/build/images/hdr-pic.png" />
            <span>{i.label}</span>
          </CheckboxItem>
        ))}
        <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
          初中<List.Item.Brief>辅助文字内容</List.Item.Brief>
        </CheckboxItem>
      </List>
    </div>);
 },
});


export default connect()(checkboxTest) ;
