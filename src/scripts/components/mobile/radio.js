import React,{ PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'dva/router';
import { connect } from 'react-redux';
import { List ,Radio,Flex,WhiteSpace} from 'antd-mobile';


const RadioItem = Radio.RadioItem;

const Test = React.createClass({
  getInitialState() {
    return {
      value: 0,
      value2: 0,
      value3: 0,
      value4: 0,
    };
  },
  onChange(value) {
    console.log('checkbox');
    this.setState({
      value,
    });
  },
  onChange2(value) {
    console.log('checkbox');
    this.setState({
      value2: value,
    });
  },
  render() {
    const { value, value2, value3, value4 } = this.state;
    const data = [
      { value: 0, label: '博士' },
      { value: 1, label: '本科' },
    ];
    const data2 = [
      { value: 0, label: '篮球', extra: '辅助文字内容' },
      { value: 1, label: '足球', extra: '辅助文字内容' },
    ];

    return (<div className="example">
      <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">Radio</h1>                               
        </div>                                  
       </div>
      <List renderHeader={() => 'RadioItem 演示'}>
        {data.map(i => (
          <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </RadioItem>
        ))}
      </List>
    </div>);
  },
});

export default connect()(Test)