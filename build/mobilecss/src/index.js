import './index.html';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import { browserHistory } from 'dva/router';


import dva from 'dva';

// 1. Initialize
const app = dva({
	 history: browserHistory,
});
// 2. Plugins
//app.use({});

// 3. Model

app.model(require('./models/demo.js'));


// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
