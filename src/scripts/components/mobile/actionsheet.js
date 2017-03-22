
import React,{ PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'dva/router';
import { connect } from 'react-redux';

import  {ActionSheet,Button,Toast} from 'antd-mobile';

const Test = React.createClass({
  	
   showActionSheet1(){
  	const BUTTONS = ['操作一', '操作二', '操作三', '删除', '取消'];
      ActionSheet.showActionSheetWithOptions({
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        destructiveButtonIndex: BUTTONS.length - 2,
        message: '我是描述',
        maskClosable: true,
       'data-seed': 'logId',
      });   
  },

   showActionSheet2(){
        const BUTTONS = [
        <div className="item"><span className="item-icon"><i className="fa fa-camera color-energized"></i></span><span>拍照</span></div>,
       <div className="item"><span className="item-icon"><i className="fa fa-picture-o color-assertive"></i></span><span>从相册中选择</span></div>,];

      ActionSheet.showActionSheetWithOptions({
        options: BUTTONS,
        message: '选择照片',
        className:"hasIcons",

      },
      (buttonIndex) => {
         return new Promise((resolve) => {
         console.log(buttonIndex);
          Toast.info('1000ms 后关闭');
          setTimeout(resolve, 1000);
        });
      });  
  },
    showActionSheet3(){
  
        const BUTTONS = ['操作一', '操作二', '操作三', '删除', '取消'];
          ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: BUTTONS.length - 1,
            destructiveButtonIndex: BUTTONS.length - 2,
            message: '我是描述',
            maskClosable: true,
            'data-seed': 'logId',
             className:"middle",
          });
      },

 render() {
	return(
      <div className="example">
      <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">ActionSheet</h1>                               
        </div>                                  
       </div>
      <div style={{ margin: '15px 10px' }}>
        <Button type="ghost" onClick={this.showActionSheet1}>默认状态</Button>
      </div>
      <div style={{ margin: '15px 10px' }}>
        <Button type="ghost" onClick={this.showActionSheet2}>默认状态</Button>
      </div>
    </div>
);
  },
});

export default connect()(Test)