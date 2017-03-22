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
        <Item data-seed="logId">标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏</Item>
        <Item wrap>文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行</Item>
        <Item extra="箭头向右" arrow="horizontal" onClick={() => {}}>标题文字</Item>
        <Item extra="箭头向下" arrow="down" onClick={() => {}}>标题文字</Item>
        <Item extra="箭头向上" arrow="up" onClick={() => {}}>标题文字</Item>
        <Item extra="内容内容" multipleLine align="top" wrap>
          多行标题文字，文字可能比较长、文字可能比较长、直接折行
        </Item>

         <Item className="inline-Icon" extra=""
          thumb="/build/images/doc-excel.png"
          onClick={() => {}}
        >我的钱包</Item>

         <Item className="inline-Icon right" 
          thumb="/build/images/doc-excel.png"
         multipleLine
          onClick={() => {}}
        >我的钱包</Item>

       

        
      </List>
      <div style={{ height: '0.16rem' }} />
      <List renderHeader={() => '左侧带图片'}>
        <Item  className="hasIcon"
          thumb="/build/images/dept.png"
          arrow="horizontal"
          onClick={() => {}}
        >我的钱包</Item>
        <Item className="hasIcon"  arrow="horizontal" thumb="/build/images/yuexin.png" >我的花销占比</Item>
      </List>
      <div style={{ height: '0.32rem' }} />
    </div>);
},
});
export default connect()(listExample)