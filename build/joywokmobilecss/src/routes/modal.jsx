import React, { PropTypes } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';

import styles from './Demo.css';
import Dialog from '../components/mobile/dialog';




function  Modal({ dispatch,dialog }) {
  const {
  show1,show2,show3
   } = dialog;

  const Props = {
     show1,
     show2, 
     show3, 
    onChange(){
      dispatch({
        type: 'dialog/show1',
      });
    },
    onClose(){
      dispatch({
        type: 'dialog/close1',
      });
    }
  };


  return (
    <div className="dialogcontent">
     <Dialog  {...Props}/> 
    </div>
  );
}

Modal.propTypes = {
   dialog: PropTypes.object,
   
   dispatch:PropTypes.func,
};


function mapStateToProps({ dialog }) {
  return { dialog };
}

export default connect(mapStateToProps)(Modal);
