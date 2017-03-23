// import { create, remove, update, query } from '../services/message';
import { parse } from 'qs';

export default {

    namespace: 'demo',
    state: {
        value:0,
        active: false,
        show:false,
        selected: 'redTab',
        selectedTab:'redTab',
        addModalVisible: false,

    },

    //subscriptions


    //effects异步操作
    //effects中的put相当于redux中的dispatch执行一个action
    //call执行一个函数



    effects: { 
      * showBar({ payload }, { call, put }) {
            yield put({ type: 'show' });
        } ,
      * create() {},
      * 'delete' () {},
      * update() {},
       * selected({ payload }, { call, put }) {
            yield put({ 
                type: 'select',
                payload: {
                  selected: payload,
                },

             });
        } ,
    },
    reducers: {
        showLoading() {}, // 控制加载状态的 reducer
        showModal() {}, // 控制 Modal 显示状态的 reducer
        hideModal() {},
        // 使用静态数据返回
        select(state,action) {
           return { ...state, ...action.payload,};
        },
        show(state) {
           return { ...state, open: !state.open };
        },

        createSuccess() {},
        deleteSuccess() {},
        updateSuccess() {},
    }
}
