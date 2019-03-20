import axios from 'axios';
import * as constants from './constants';
export const acticleList=(result,nextpage,totalpage)=>({
	type:constants.ACTICLE_LIST,
	result,
	nextpage,
	totalpage
})
export const bannerList=(result)=>({
	type:constants.BANNER_LIST,
	result
})
export const getBanner=()=>{
	return (dispatch)=>{
		axios.get('/api/index/poster').then((res)=>{
			dispatch(bannerList(res.data.object))
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
