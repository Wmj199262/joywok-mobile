import React,{ PropTypes } from 'react';
import { Link } from 'dva/router';
import { connect } from 'react-redux';

import  {Card,Flex,Icon,WhiteSpace} from 'antd-mobile';




let Example=React.createClass({
render(){
  return (
   <div className="example">
    <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">Button</h1>                               
        </div>                                  
       </div>
     <div className="card-container">
       <div>
        <Card full>
          <Card.Body>
            <div className="cardwrap card1">
              <div className="avatar avatar-1">
                <img src="http://www.joywok.com/public/images/avatar/hdr-pic.png"/>
              </div>
              <div className="info">
                <div className="info-1 ellipsis">关于微信－微服务页面设计及开发...</div>
                <div className="info-2">
                  <span>李佳萍</span>
                  <span>2016.01.25</span>
                  <span>会办中</span>
              </div>
            </div>
           </div >
          </Card.Body>
        </Card>
       </div>
       <div>
        <WhiteSpace size="lg" />
        <Card full>
          <Card.Body>
            <div className="cardwrap card2">
              <div className="avatar avatar-1">
                <img src="http://www.joywok.com/public/images/avatar/hdr-pic.png"/>
              </div>
              <div className="info">
                <div className="info-1 ellipsis">关于微信－微服务页面设计及开发...</div>
                <div className="info-2">
                  <span>李佳萍</span>
                  <span>2016.01.25</span>
                  <span>会办中</span>
              </div>
            </div>
           </div >
          </Card.Body>
        </Card>
       </div>
       <div>
        <WhiteSpace size="lg" />
        <Card full>
          <Card.Body>
            <div className="cardwrap card3">
             <div className="avatar avatar-2">
               <img src="http://www.joywok.com/public/images/avatar/hdr-pic.png"/>
              </div>
              <div className="card-name">翟磊</div>
           </div >
          </Card.Body>
        </Card>
       </div>
     </div>
    </div>
  );
  },
});


export default connect()(Example);
