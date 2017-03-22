import React,{ PropTypes } from 'react';
import { Link } from 'dva/router';
import { Button} from 'antd-mobile/lib/button';
import { Flex } from 'antd-mobile/lib/flex';
import { Icon} from 'antd-mobile/lib/icon';

import  './button.css';

const button = (props) => {
  return (
   <div className="btn-container example" >
      <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">JMF-Demo-List</h1>                               
        </div>                                  
       </div>
      <div style={{ margin: '0 0.16rem' }}>
           <div  className='buttonItem'>
             <Button className="btn" data-seed="logId" activeStyle={false} ><Icon type="star-o" /></Button>
           </div>
           <div  className='buttonItem'>
             <Button className="btn" data-seed="logId" activeStyle={false} ><Icon type="aliwangwang-o" /></Button>
           </div>
            <div  className='buttonItem'>
             <Button className="btn" data-seed="logId" activeStyle={false} ><Icon type="cross-circle-o" /></Button>
           </div>

      </div>
    </div>
  );
};

button.propTypes = {
};

export default button;
