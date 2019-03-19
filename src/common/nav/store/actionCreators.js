import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';
const setList = (data) => ({
	type: constants.SET_LIST,
	data: fromJS(data)
});
export const getList = () => {
	return (dispatch) => {
		axios.get('/api/product/type').then((res) => {
			const data = res.data;
			dispatch(setList(data));
		}).catch(() => {
			console.log('error');
		})
	}
};
