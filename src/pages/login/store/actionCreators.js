import axios from '../../../http';
import * as constants from './constants';
import cookie from 'react-cookies';

const changeLogin = (t,u) => ({
	type: constants.CHANGE_LOGIN,
	value: true,
	token:t,
	userId:u
})

export const logout = () => ({
	type: constants.LOGOUT,
	value: false
})
export const login = (accout, password) => {
	return (dispatch) => {
		//假登录（故任何用户名密码均可）
		axios.get('api/auth.json',{"loginName":accout,"passWord":password}).then((res) => {
			if (res.code===200) {
				localStorage.setItem('token',res.object.token);
				localStorage.setItem('loginUserId',res.object.userId);
				cookie.save('login', true);
				dispatch(changeLogin(res.object.token,res.object.userId))
			}else {
					cookie.remove('login');
					localStorage.removeItem('token');
					localStorage.removeItem('loginUserId');
	//		message.error(res.object);
			}
		})
	}
}
