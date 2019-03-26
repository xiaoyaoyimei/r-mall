import axios from 'axios';
import * as constants from './constants';
export const acticleList=(result,nextpage,totalpage)=>({
	type:constants.ACTICLE_LIST,
	result,
	nextpage,
	totalpage
})
const changHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	poster: result.poster,
	basictype: result.basictype,
	hotitem: result.hotitem
});
export const bannerList=(result)=>({
	type:constants.BANNER_LIST,
	result
})
export const getHome=()=>{
	return (dispatch)=>{
		axios.get('api/home.json').then((res)=>{
	    dispatch(changHomeData(res.data.data))
		})
	}
}
export const getHomeInfo=()=>{
	return (dispatch)=>{
		axios.post('/api/article',{page:0}).then((res)=>{
			dispatch(acticleList(res.data.datas,0,res.data.totalpage))
		})
	}
}
export const getMoreList=(page)=>{
	return (dispatch)=>{
		    axios.post('/api/article',{page:page+1}).then((res)=>{
			dispatch(acticleList(res.data.datas,page+1,res.data.totalpage))
		})
	}
}
