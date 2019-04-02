import * as  constants from './constants';
import axios from 'axios';
export const detailInfo=(result)=>({
	 type:constants.DEATIL,
	 result
})
export const getDetail=()=>{
		return (dispatch)=>{
			axios.get(`api/detail.json`).then((res)=>{
				dispatch(detailInfo(res.data.object))
			})

	   }
}
