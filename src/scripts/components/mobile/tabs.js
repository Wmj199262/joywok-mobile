import { Link } from 'dva/router';
import React,{ PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Tabs,WhiteSpace} from 'antd-mobile';

const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}

const TabExample = React.createClass({
  render() {
	return(
	 <div className="example">
      <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">Tabs</h1>                               
        </div>                                  
       </div>
        <WhiteSpace />
        <Tabs defaultActiveKey="1" animated={false} className="example">
          <TabPane tab="选项卡一" key="1" >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡一内容
            </div>
          </TabPane>
          <TabPane tab="选项卡二" key="2">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡二内容
            </div>
          </TabPane>
          <TabPane tab="选项卡三" key="3">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡三内容
            </div>
          </TabPane>
          <TabPane tab="选项卡三" key="4" >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡四内容
            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />
         <WhiteSpace />
        <Tabs defaultActiveKey="1" animated={false} className="wang" >
          <TabPane tab="选项卡一" key="1" >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡一内容
            </div>
          </TabPane>
          <TabPane tab="选项卡二" key="2">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡二内容
            </div>
          </TabPane>
          <TabPane tab="选项卡三" key="3">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡三内容
            </div>
          </TabPane>
          <TabPane tab="选项卡三" key="4" >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡四内容
            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />
         <WhiteSpace />
        <Tabs defaultActiveKey="1" animated={false} className="wang" >
          <TabPane tab="选项卡一" key="1" >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡一内容
            </div>
          </TabPane>
          <TabPane tab="选项卡二" key="2">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡二内容
            </div>
          </TabPane>
          <TabPane tab="选项卡三" key="3">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡三内容
            </div>
          </TabPane>
          <TabPane tab="选项卡三" key="4" >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡四内容
            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />
                <Tabs defaultActiveKey="1" animated={false} className="assertive" >
          <TabPane tab="选项卡一" key="1" >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡一内容
            </div>
          </TabPane>
          <TabPane tab="选项卡二" key="2">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡二内容
            </div>
          </TabPane>
          <TabPane tab="选项卡三" key="3">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡三内容
            </div>
          </TabPane>
          <TabPane tab="选项卡三" key="4" >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡四内容
            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />
         <WhiteSpace />
                <Tabs defaultActiveKey="1" animated={false} className="gray" >
          <TabPane tab="选项卡一" key="1" >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡一内容
            </div>
          </TabPane>
          <TabPane tab="选项卡二" key="2">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡二内容
            </div>
          </TabPane>
          <TabPane tab="选项卡三" key="3">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡三内容
            </div>
          </TabPane>
          <TabPane tab="选项卡三" key="4" >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡四内容
            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />
         <WhiteSpace />
                <Tabs defaultActiveKey="1" animated={false} className="calm" >
          <TabPane tab="选项卡一" key="1" >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡一内容
            </div>
          </TabPane>
          <TabPane tab="选项卡二" key="2">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡二内容
            </div>
          </TabPane>
          <TabPane tab="选项卡三" key="3">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡三内容
            </div>
          </TabPane>
          <TabPane tab="选项卡三" key="4" >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡四内容
            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />
      </div>)

},
});

export default connect()(TabExample)