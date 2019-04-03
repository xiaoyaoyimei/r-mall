import {fromJS} from 'immutable';
import * as  constants from './constants';
const defaultState=fromJS({
	shangp:{},
})
export default(state=defaultState,action)=>{
	switch(action.type){
	    case constants.DEATIL:
	    return  state.set('shangp',action.result)
		default:return state;
	}
}