import React, {
	Component
} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	NavWrap
} from '../style';
class List extends Component {
	render() {
		const {
			list
		} = this.props;

		return(
			<NavWrap>
							{
							 		list.map((item, index) => {
											return(
												<Link  key={index}  to={'/detail/' + item.get('id')}>
												{item.get('typeName')}
										 	</Link>
									);
								})

							}
						</NavWrap>
		)

	}
}
const mapState = (state) => ({
	list: state.getIn(['nav', 'list'])
});

export default connect(mapState, null)(List);
