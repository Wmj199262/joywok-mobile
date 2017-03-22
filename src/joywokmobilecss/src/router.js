import  React from 'react';
import  { Router, Route ,browserHistory,IndexRoute} from 'dva/router';


//mobile 组件
import  Demo from './routes/Demo';
import  mobileTabsbar from './components/mobile/tabsbar';
import  mobileSwitchDemo from './components/mobile/switch';
import  mobileExample from './components/mobile/Example';
import   mobileButton from './components/mobile/button';
import   mobileIconsButton  from './components/mobile/IconsButton';
import   mobileCards  from './components/mobile/card';
import   mobileInput  from './components/mobile/input';
import   mobiledate from './components/mobile/datepicker';
import   mobileSelect  from './components/mobile/select';

import   mobileTabs  from './components/mobile/tabs';
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
import   mobilenavBar  from './components/mobile/navbar';
import   mobileSegment  from './components/mobile/segment';

//web组件




export default function ({ history }) {
  return (

     <Router history={browserHistory} >
        <Route path="/" component={Demo} />
        <Route path="/mobile/button" component={mobileButton} />
        <Route path="/mobile/IconsButton" component={mobileIconsButton} />
        <Route path="/mobile/navbar" component={mobilenavBar} />
        <Route path="/mobile/input" component={mobileInput} />
        <Route path="/mobile/form" component={mobileForm} />
        <Route path="/mobile/textarea" component={mobileTextarea} />
        <Route path="/mobile/radio" component={mobileRadio} />
        <Route path="/mobile/checkbox" component={mobileCheckbox} />
        <Route path="/mobile/list" component={mobileList} />
        <Route path="/mobile/cards" component={mobileCards} />
        <Route path="/mobile/tabsbar" component={mobileTabsbar} />
        <Route path="/mobile/tabs" component={mobileTabs} />
        <Route path="/mobile/segment" component={mobileSegment} />
        <Route path="/mobile/select" component={mobileSelect} />
        <Route path="/mobile/datepicker" component={mobiledate} />
        <Route path="/mobile/actionsheet" component={mobileSheet} />
        <Route path="/mobile/dialog" component={mobileDialog} />
        <Route path="/mobile/search" component={mobileSearch} />
        <Route path="/mobile/switch" component={mobileSwitchDemo} />
         <Route path="/mobile/toast" component={mobileToast} />
       
    </Router>
  );
}
