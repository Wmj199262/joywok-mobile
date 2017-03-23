
import React,{ PropTypes } from 'react';
import { Link } from 'dva/router';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Modal, Button, WhiteSpace, WingBlank ,View} from 'antd-mobile';
const alert = Modal.alert;


const App = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  showModal(e) {
    // 现象：如果弹出的弹框上的 x 按钮的位置、和手指点击 button 时所在的位置「重叠」起来，
    // 会触发 x 按钮的点击事件而导致关闭弹框 (注：弹框上的取消/确定等按钮遇到同样情况也会如此)
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      visible: true,
    });
  },
  onClose() {
    this.setState({
      visible: false,
    });
  },
showAlert() {
      alert('删除', '确定删除么???', [
        { text: '确定', onPress: () => console.log('cancel'), style: 'default' },
        { text: '取消', onPress: () => console.log('ok') },
      ]);
    },

    showConfirm() {
      alert('删除', '确定删除么???', [
        { text: '确定', onPress: () => console.log('cancel') },
        { text: '取消', onPress: () => console.log('ok') },
      ]);
    },

    showMoreBtn() {
      alert('单个按钮情况', <div>这里有一个按钮, 你试试</div>, [
        { text: '按钮一', onPress: () => console.log('第0个按钮被点击了') },
      ]);
},
render(){
return (
    <div className="example">
        <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">Dialog</h1>                               
        </div>                                  
       </div>
        <WingBlank>
          <Button type="primary" onClick={this.showModal}>
            显示对话框
          </Button>
        </WingBlank>
        <Modal  transparent maskClosable closable onClose={this.onClose} visible={this.state.visible}  footer={[
              { text: '确定', onPress: () => { console.log('ok'); this.onClose(); } },
          ]}>
            <div style={{ paddingVertical: 20 }}>
              <div>
                <img src="http://www.joywok.com/public/images/avatar/hdr-pic.png"/>
                <p className="title">相关说明</p>
              </div>
              <div className="content" style={{ textAlign: 'center' }}>请提供工号、姓名、用途、具体要求如<br/>税前税后，年收入还是月收入等相<br/>关信息；于工作日内给徐璠发<br/>邮件(跨区除外)预约取件</div>
            </div>
          </Modal>

         <div>
          <WhiteSpace size="lg" />
          <WingBlank size="lg">
            <Button onClick={this.showAlert}>自定义按钮 </Button>
          </WingBlank>
          <WhiteSpace size="lg" />
          <WingBlank size="lg">
            <Button onClick={this.showConfirm}>确认对话框</Button>
          </WingBlank>
          <WhiteSpace size="lg" />
          <WingBlank size="lg">
            <Button onClick={this.showMoreBtn}>弹出一个按钮 </Button>
          </WingBlank>
          <WhiteSpace size="lg" />
        </div>
        <div className="icon-item-show">
         <span className="icon icon-dept"></span>
         <span className="icon-item-show-val">公司部门</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-chart"></span>
         <span className="icon-item-show-val">悅信</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-chart active"></span>
         <span className="icon-item-show-val">悅信</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-like"></span>
         <span className="icon-item-show-val">收藏</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-like active"></span>
         <span className="icon-item-show-val">收藏</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-dept"></span>
         <span className="icon-item-show-val">公司部门</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-dept active"></span>
         <span className="icon-item-show-val">公司部门</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-close"></span>
         <span className="icon-item-show-val">关闭</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-close active"></span>
         <span className="icon-item-show-val">关闭</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-filter"></span>
         <span className="icon-item-show-val">过滤</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-filter active"></span>
         <span className="icon-item-show-val">过滤</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-pass"></span>
         <span className="icon-item-show-val">通过</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-pass active"></span>
         <span className="icon-item-show-val">通过</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-no-pass"></span>
         <span className="icon-item-show-val">未通过</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-no-pass active"></span>
         <span className="icon-item-show-val">未通过</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-as"></span>
         <span className="icon-item-show-val">信息流</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-as active"></span>
         <span className="icon-item-show-val">信息流</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-foward"></span>
         <span className="icon-item-show-val">转发</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-foward active"></span>
         <span className="icon-item-show-val">转发</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-people-talk"></span>
         <span className="icon-item-show-val">群聊</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-people-talk active"></span>
         <span className="icon-item-show-val">群聊</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-add"></span>
         <span className="icon-item-show-val">添加</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-add active"></span>
         <span className="icon-item-show-val">添加</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-less"></span>
         <span className="icon-item-show-val">减去</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-less active"></span>
         <span className="icon-item-show-val">减去</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-application"></span>
         <span className="icon-item-show-val">应用号</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-application active"></span>
         <span className="icon-item-show-val">应用号</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-file"></span>
         <span className="icon-item-show-val">文件</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-file active"></span>
         <span className="icon-item-show-val">文件</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-address"></span>
         <span className="icon-item-show-val">通讯录</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-address active"></span>
         <span className="icon-item-show-val">通讯录</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-good"></span>
         <span className="icon-item-show-val">赞</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-good active"></span>
         <span className="icon-item-show-val">赞</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-setting"></span>
         <span className="icon-item-show-val">设置</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-setting active"></span>
         <span className="icon-item-show-val">设置</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-search"></span>
         <span className="icon-item-show-val">搜索</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-search active"></span>
         <span className="icon-item-show-val">搜索</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-msg"></span>
         <span className="icon-item-show-val">短信</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-msg active"></span>
         <span className="icon-item-show-val">短信</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-help"></span>
         <span className="icon-item-show-val">帮助</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-help active"></span>
         <span className="icon-item-show-val">帮助</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-exit"></span>
         <span className="icon-item-show-val">退出</span>
        </div>
        <div className="icon-item-show">
         <span className="icon icon-exit active"></span>
         <span className="icon-item-show-val">退出</span>
        </div>                  
      </div>
    );

},
});

export default connect()(App)


