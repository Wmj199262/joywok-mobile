
import React,{ PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'dva/router';
import { connect } from 'react-redux';

import { Picker, List, WhiteSpace ,DatePicker} from 'antd-mobile';
import { createForm } from 'rc-form';


import moment from 'moment';
import 'moment/locale/zh-cn';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const zhNow = moment().locale('zh-cn').utcOffset(8);
const maxDate = moment('2018-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('2015-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);

const maxTime = moment('22:00 +0800', 'HH:mm Z').utcOffset(8);
const minTime = moment('08:30 +0800', 'HH:mm Z').utcOffset(8);

const gmtNow = moment().utcOffset(0);

import { district, provinceLite as province } from 'antd-mobile-demo-data';


const defaultDate = moment().locale('zh-cn').utcOffset(8);

let Test = React.createClass({
  getInitialState() {
    return {
      date: zhNow,
      dpValue: null,
      visible: false,
    };
  },
  onChange(date) {
    this.setState({
      date,
    });
  },
  render() {
  const { getFieldProps } = this.props.form;
   return (<div className="example">
     <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">DatePicker</h1>                               
        </div>                                  
       </div>
      <List>
        <DatePicker
          mode="date"
          title="选择日期"
          extra="可选,小于结束日期"
          {...getFieldProps('date1', {
            initialValue: zhNow,
          })}
          minDate={minDate}
          maxDate={maxDate}
        >
          <List.Item arrow="horizontal">日期</List.Item>
        </DatePicker>
         <DatePicker mode="time" {...getFieldProps('time1')}>
          <List.Item arrow="horizontal">时间</List.Item>
        </DatePicker>
        <DatePicker
          mode="time"
          {...getFieldProps('time', {
            initialValue: zhNow,
          })}
          minDate={minTime}
          maxDate={maxTime}
        >
          <List.Item arrow="horizontal">时间，限定上下限</List.Item>
        </DatePicker>
        <DatePicker className="forss"
          mode="datetime"
          onChange={this.onChange}
          value={this.state.date}
        >
          <List.Item arrow="horizontal">日期+时间</List.Item>
        </DatePicker>
        <DatePicker
          mode="time"
          format={val => val.format('HH:mm Z')}
          okText="OK"
          dismissText="Cancel"
          locale={enUs}
          {...getFieldProps('customformat', {
            initialValue: gmtNow,
          })}
        >
          <List.Item arrow="horizontal">time(en_US)</List.Item>
        </DatePicker>
      </List>
    </div>);
  },
});

Test = createForm()(Test);

export default connect()(Test)