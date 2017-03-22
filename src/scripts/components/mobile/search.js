
import React,{ PropTypes } from 'react';
import { Link } from 'dva/router';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { SearchBar,Button,WhiteSpace,WingBlank} from 'antd-mobile';



const SearchBarExample = React.createClass({
  getInitialState() {
    return {
      value: '美食',
      focused: false,
    };
  },
  onChange(value) {
    this.setState({ value });
  },
  clear() {
    this.setState({ value: '' });
  },
  render() {
    return (<div className="need-left-right-margin">
     <div className="example"> 
       <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">search</h1>                               
        </div>                                  
       </div>
     </div>
      <SearchBar placeholder="搜索" />
      <WhiteSpace />
      <SearchBar defaultValue="初始值"  placeholder="搜索"  />
      <WhiteSpace />
      <SearchBar placeholder="自动获取光标" autoFocus />
      <WhiteSpace />
      <SearchBar
        placeholder="手动获取获取光标"
        focused={this.state.focused}
        onFocus={() => {
          this.setState({
            focused: false,
          });
        }}
      />
      
    </div>);
  },
});

export default connect()(SearchBarExample);