
import React,{ PropTypes } from 'react';
import { Link } from 'dva/router';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Modal,Button,WhiteSpace,WingBlank,View} from 'antd-mobile';

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
      alert('删除', '确定删除么?', [
        { text: '确定', onPress: () => console.log('ok'), style: 'default' },
        { text: '取消', onPress: () => console.log('cancel') },
      ]);
    },

    showConfirm() {
      alert('删除', '确定删除么?', [
        { text: '确定', onPress: () => console.log('ok') },
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
              <div className="content" style={{ textAlign: 'center' }}>请提供工号、姓名、用途、具体要求如税前税后，年收入还是月收入等相关信息；于工作日内给徐璠发邮件(跨区除外)预约取件</div>
            </div>
          </Modal>

         <div>
          <WhiteSpace size="lg" />
          <WingBlank size="lg">
            <Button onClick={this.showAlert}>确认对话框</Button>
          </WingBlank>
          <WhiteSpace size="lg" />
          <WingBlank size="lg">
            <Button onClick={this.showConfirm}>自定义对话框</Button>
          </WingBlank>
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
        </div>
      </div>
    );

},
});

export default connect()(App)


