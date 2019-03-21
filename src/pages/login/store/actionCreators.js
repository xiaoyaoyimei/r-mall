import axios from '../../../http';
import * as constants from './constants';
import { message } from 'antd';
const changeLogin = (t,u) => ({
	type: constants.CHANGE_LOGIN,
	value: true,
	token:t,
	loginUserId:u
})

export const logout = () => ({
	type: constants.LOGOUT,
	value: false
})
export const login = (accout, password) => {
	return (dispatch) => {
		axios.post('/api/customer/login',{"loginName":accout,"passWord":password}).then((res) => {
			if (res.code===200) {
				localStorage.setItem('token',res.object.token);
				localStorage.setItem('loginUserId',res.object.loginUserId);
					dispatch(changeLogin(res.object.token,res.object.loginUserId))
			//	console.log(res.object)

			}else {
					localStorage.removeItem('token');
					localStorage.removeItem('loginUserId');
	//		message.error(res.object);
			}
		})
	}
}
