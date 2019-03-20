import axios from 'axios';
import * as constants from './constants';
import { message } from 'antd';
const changeLogin = () => ({
	type: constants.CHANGE_LOGIN,
	value: true
})

export const logout = () => ({
	type: constants.LOGOUT,
	value: false
})
export const login = (accout, password) => {
	return (dispatch) => {
		axios.post('/api/customer/login',{"loginName":accout,"passWord":password}).then((res) => {
			const result = res.data;
			if (result.code==='200') {
				dispatch(changeLogin())
			}else {
			message.error(result.object);
			}
		})
	}
}
