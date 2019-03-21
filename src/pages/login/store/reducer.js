import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	login: false,
	token:'',
	loginUserId:''
});

export default (state = defaultState, action) => {
	console.log(action.value)
	switch(action.type) {
		case constants.CHANGE_LOGIN:
		return  state.merge({
	'login': fromJS(action.value),
	'token': fromJS(action.token),
	'loginUserId': fromJS(action.loginUserId),
	});

		case constants.LOGOUT:
			return state.set('login', action.value);
		default:
			return state;
	}
}
