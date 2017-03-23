import React,{ PropTypes } from 'react';
import { Button, Flex ,Icon} from 'antd-mobile';

const button = (props) => {
  return (
 <div className="btn-container">
      <div style={{ margin: '0 0.16rem' }}>
        <div  className='buttonItem'>
          <Button className="btn" data-seed="logId"  >有点击反馈</Button>
        </div>
        <div className='buttonItem'>
          <Button className="btn" data-seed="logId" type="warning" activeStyle={false}>warning 按钮</Button>
        </div>
        <div  className='buttonItem'>
          <Button className="btn" data-seed="logId" type="ghost" onClick={e => console.log(e)}>ghost 按钮</Button>
        </div>
        <div  className='buttonItem'>
          <Button className="btn" type="primary">primary 按钮</Button>
        </div>
        <div  className='buttonItem'>
          <Button className="btn" disabled >disabled 按钮</Button>
        </div>
         <div  className='buttonItem'>
          <Button className="btn hasIcon"><i className="fa fa-check" aria-hidden="true"></i>图标按钮</Button>
        </div>

         <div  className='buttonItem'>
          <Button className="btn hasIcon" type="primary"><i className="fa fa-check" aria-hidden="true"></i>图标按钮</Button>
        </div>
        
       
       
      </div>
    </div>
  );
};

button.propTypes = {
};

export default button;
