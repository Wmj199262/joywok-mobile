import React,{ PropTypes } from 'react';
import { List } from 'antd-mobile';
import { Link } from 'dva/router';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
const Item = List.Item;
const Brief = Item.Brief;

let listExample = React.createClass({
 
  render() {
  return (<div className="example">
      <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">List</h1>                               
        </div>                                  
       </div>
      <List renderHeader={() => '左侧无icon'} className="my-list">
        <Item data-seed="logId" extra="0102">机构代码</Item>
        <Item wrap extra="刘**">客户姓名</Item>
        <Item extra="" arrow="horizontal" onClick={() => {}}>账户类型</Item>
        <Item extra="" arrow="down" onClick={() => {}}>审核类型</Item>
        <Item extra="" arrow="up" onClick={() => {}}>账户情况</Item>

        
      </List>
      <div style={{ height: '0.16rem' }} />
      <List renderHeader={() => '左侧带图片'}>

         <Item className="inline-Icon" extra=""
            thumb="../mobilecss/build/images/doc-excel.png"
            onClick={() => {}}
          >我的记录</Item>

           <Item className="inline-Icon right" 
            thumb="../mobilecss/build/images/doc-excel.png"
           multipleLine
            onClick={() => {}}
          >我的记录</Item>

        <Item  className="hasIcon"
          thumb="../mobilecss/build/images/dept.png"
          arrow="horizontal"
          onClick={() => {}}
        >部门</Item>
        <Item className="hasIcon"  arrow="horizontal" thumb="../mobilecss/build/images/yuexin.png" >悦信</Item>
      </List>
      <div style={{ height: '0.32rem' }} />
    </div>);
},
});
export default connect()(listExample)