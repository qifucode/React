import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
// 创建store和中间件
import {applyMiddleware, createStore,Middleware} from 'redux'
import routReducer from './reducsers'
import { Provider } from 'react-redux';
import routes from "./routes"
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'

import ShowList from './components/FlashMessageShow/ShowList'


// composeWithDevTools(applyMiddleware(logger,thunk)处理中间件
const store = createStore(routReducer,composeWithDevTools(applyMiddleware(logger,thunk)))



ReactDOM.render(
// 代码通过Provider向组件<App />中传递store， 这里要注意，Provider不仅向<App />传递store，而且也向
// <App />的子孙组件传递， 所以只要一个组件的祖先是<App />,那这个组件就可以拿到store
        <Provider store={store}>
        <Router routes = { routes }>
        <NavigationBar />
        <ShowList />
        {routes}
        </Router>
        </Provider>
        ,document.getElementById('root'));



