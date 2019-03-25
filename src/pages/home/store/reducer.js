import {fromJS} from 'immutable';
import * as constants from './constants';
const defaultState=fromJS({
	bannerList:[],
	articleList:[],
	recommondList:[],
	articlePage:0,
	totalpage:0,
	poster:[],
	basictype:[],
	hotitem:[]
})
const changeHomeData = (state, action) => {
	return state.merge({
		poster: fromJS(action.poster),
		basictype: fromJS(action.basictype),
		hotitem: fromJS(action.hotitem)
	});
};

export default(state=defaultState,action)=>{
	switch(action.type){
		case constants.CHANGE_HOME_DATA:
	return changeHomeData(state, action);
	    case constants.ACTICLE_LIST:
	    return  state.merge({
		'articleList': fromJS(action.result),
		'articlePage': fromJS(action.nextpage),
		'totalpage':fromJS(action.totalpage)
		});
		case constants.BANNER_LIST:	return state.set('bannerList', fromJS(action.result))
		default:return state;
	}

}
