import { fromJS } from 'immutable';
import * as constants from './constants';
import cookie from 'react-cookies';
const defaultState = fromJS({
	login: false,
	token:'',
	loginUserId:''
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_LOGIN:
		return state.merge({
		'login':fromJS(action.value),
		'token': fromJS(action.token),
		'loginUserId': fromJS(action.loginUserId),
		});
		case constants.LOGOUT:
			return state.set('login', action.value);
		default:
			return state;
	}
}
