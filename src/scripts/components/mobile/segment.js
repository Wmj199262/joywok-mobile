import React,{ PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { Link } from 'dva/router';
import { SegmentedControl, WingBlank } from 'antd-mobile';

const SegmentedControlExample = React.createClass({
  onChange(e) {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  },
  onValueChange(value) {
    console.log(value);
  },
  render() {
    return (
      <div className="example">
        <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">segment</h1>                               
        </div>                                  
       </div>
      <WingBlank size="lg" className="sc-example example">

        <p className="sub-title">最简</p>
        <SegmentedControl values={['切换一', '切换二']}  tintColor={'#157efb'} />

        <p className="sub-title">禁用</p>
        <SegmentedControl values={['切换一', '切换二']} disabled tintColor={'#4174d9'} />

        <p className="sub-title">默认选中一项</p>
        <SegmentedControl selectedIndex={1} values={['切换一', '切换二', '切换三']}  tintColor={'#0ab771'}/>

        <p className="sub-title">主色调样式 tintColor</p>
        <SegmentedControl
          values={['切换一', '切换二', '切换三']}
          tintColor={'#f2bb16'}
        />

        <p className="sub-title">事件</p>
        <SegmentedControl
          values={['切换一', '切换二', '切换三']}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
            tintColor={'#777777'}
        />
      </WingBlank>
    </div>
    );
  },

});
export default connect()(SegmentedControlExample)

