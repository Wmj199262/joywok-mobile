import React, { PropTypes } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import { Tabs} from 'antd';

import styles from './Demo.css';
import Header from '../components/mobile/header';




function  DemoLayout({ location, dispatch, demo,children }) {
  const {
    open,position,
    } = demo;


  const Props = {
    open,
    position,
    onOpenChange(open){
    dispatch({
        type: 'demo/showBar',
        payload: open,
      });
    }
    
  };


  return (
    <div className={styles.normal}>
      <Header  {...Props}/>
      
    </div>
  );
}

DemoLayout.propTypes = {
  demo: PropTypes.object,
  location: PropTypes.object,
   dispatch: PropTypes.func,
};


function mapStateToProps({ demo }) {
  return { demo };
}

export default connect(mapStateToProps)(DemoLayout);
