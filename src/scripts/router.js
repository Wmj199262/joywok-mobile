import React, { PropTypes , Component} from 'react';
import { Router, Route,browserHistory} from 'dva/router';

import Demo  from './components/mobile/header';
import  mobileTabsbar from './components/mobile/tabsbar';

import   mobilenavBar  from './components/mobile/navbar';
import   mobilesegment  from './components/mobile/segment';

import  mobileSwitchDemo from './components/mobile/switch';
import   mobileButton from './components/mobile/button';
import   mobileIconsButton  from './components/mobile/IconsButton';
import   mobileCards  from './components/mobile/card';
import   mobileInput  from './components/mobile/input';
import   mobiledate from './components/mobile/datepicker';
import   mobileSelect  from './components/mobile/select';

import   mobileDatepicker  from './components/mobile/datepicker';
import   mobileSheet  from './components/mobile/actionsheet';
import   mobileList  from './components/mobile/list';
import   mobileRadio  from './components/mobile/radio';
import   mobileTextarea from './components/mobile/textarea';
import   mobileCheckbox  from './components/mobile/checkbox';
import   mobileForm  from './components/mobile/forms';
import   mobileDialog  from './components/mobile/dialog';
import   mobileSearch  from './components/mobile/search';
import   mobileToast  from './components/mobile/toast';
import   mobileLoading  from './components/mobile/loading';

class Dashboard extends Component {
  render() {
    return (
        <div>
        	<Button className="btn" type="primary">primary 按钮</Button>
        </div>
    )
  }
}
// export default RouterConfig;
module.exports = function({browserHistory}) {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Demo} />
      <Route path="/mobile/navbar" component={mobilenavBar} />
      <Route path="/mobile/tabsbar" component={mobileTabsbar} />
     <Route path="/mobile/segment" component={mobilesegment} />

      <Route path="/mobile/button" component={mobileButton} />
      <Route path="/mobile/input" component={mobileInput} />
      <Route path="/mobile/textarea" component={mobileTextarea} />
      <Route path="/mobile/select" component={mobileSelect} />
      <Route path="/mobile/datepicker" component={mobileDatepicker} />
      <Route path="/mobile/toggle" component={mobileSwitchDemo} />
      <Route path="/mobile/checkbox" component={mobileCheckbox} />
      <Route path="/mobile/radio" component={mobileRadio} />
      <Route path="/mobile/search" component={mobileSearch} />
      <Route path="/mobile/list" component={mobileList} />
      <Route path="/mobile/cards" component={mobileCards} />
      <Route path="/mobile/actionsheet" component={mobileSheet} />
      <Route path="/mobile/dialog" component={mobileDialog} />
      <Route path="/mobile/toast" component={mobileToast} />
      <Route path="/mobile/form" component={mobileForm} />
      <Route path="/mobile/loading" component={mobileLoading} />

    </Router>
  );
};


