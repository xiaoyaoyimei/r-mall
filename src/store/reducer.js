import {combineReducers} from 'redux-immutable';
import {reducer as headReducer} from '../common/header/store';
import {reducer as navReducer} from '../common/nav/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as loginReducer } from '../pages/login/store';
import { reducer as detailReducer } from '../pages/detail/store';
const reducer=combineReducers({
	header:headReducer,
	home:homeReducer,
	login:loginReducer,
	nav:navReducer,
	detail:detailReducer
})
export default reducer;
