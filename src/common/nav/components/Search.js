import React, {
	Component
} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	SearchWrap,
  SearchBtn
} from '../style';
class List extends Component {
	render() {
		return(
			<SearchWrap>
       <input/>
       <SearchBtn><i className="iconfont">&#xe637;</i> </SearchBtn>
						</SearchWrap>
		)

	}
}


export default connect(null, null)(List);
