import {fromJS} from 'immutable';
import * as  constants from './constants';
const defaultState=fromJS({
	product:{},
})
export default(state=defaultState,action)=>{
	switch(action.type){
	    case constants.DEATIL:
	    return  state.set('product',action.result)
		default:return state;
	}
	
}