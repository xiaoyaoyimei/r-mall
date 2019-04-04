import {Map,setIn} from 'immutable';
import * as  constants from './constants';
const defaultState=Map({
	shangp:{
		product:{
			modelImg:''
		}
	},
})
export default(state=defaultState,action)=>{

	switch(action.type){
	    case constants.DEATIL:
	    return  state.set('shangp',action.result)
	       case constants.CHANGEBIG:
	    return  state.setIn(['shangp','product','modelImg'],action.result)
		default:return state;
	}
	
}