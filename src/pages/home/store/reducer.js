import {fromJS} from 'immutable';
import * as constants from './constants';
const defaultState=fromJS({
	bannerList:[],
	articleList:[],
	recommondList:[],
	articlePage:0,
	totalpage:0
})
export default(state=defaultState,action)=>{
	switch(action.type){
	    case constants.ACTICLE_LIST:
	    return  state.merge({
		'articleList': fromJS(action.result),
		'articlePage': fromJS(action.nextpage),
		'totalpage':fromJS(action.totalpage)
		});
		case constants.BANNER_LIST:	return state.set('bannerList', action.data);
		default:return state;
	}

}
