import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../redux/reducers/auth';
import userReducer from '../redux/reducers/user'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      user: userReducer
  }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
