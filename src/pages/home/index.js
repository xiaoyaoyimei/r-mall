import React, {
	Component
} from 'react';
import { Link} from 'react-router-dom';
import {
	HomeWrapper,

Ul,Hot,One
} from './style';
import Banner from './components/Banner';
import Header from '../../common/header/index';
import Nav from '../../common/nav/index';
import { connect } from 'react-redux';
import{actionCreators} from './store'
class Home extends Component {
	render() {
		const {basictype,hotitem} = this.props;
		return(
			<div>
			<Header />
			<Nav />
			<HomeWrapper>
			<Banner />
			<Ul>
			{
				basictype.map((item, index) => {
					return (
							<Link key={index} to={'/sort/detail/' + item.get('id')} className="li">
								<img alt={item.get('list').get('type_name')}  src={global.constants.baseUrl+item.get('list').get('img_url')} />
							   <span className="normol">	{item.get('list').get('type_name')}</span>
							</Link>
					);
				})
			}
			</Ul>
					<Hot>热销单品</Hot>
			<One>			{
							hotitem.map((item, index) => {
								return (
									<li  key={index}>
									<em>HOT</em>
										<Link to={'/sort/detail/' + item.get('list').get('product_id')} >
											<img alt={item.get('list').get('type_name')}  src={global.constants.baseUrl+item.get('list').get('img_url')} />
										   <h6>	{item.get('list').get('model_no')}</h6>
											 						   <p>	{item.get('list').get('describe1')}</p>
																		 <span>{item.get('list').get('sale_price')}</span>
										</Link>
										</li>
								);
							})
						}</One>

			   </HomeWrapper>
			   </div>
		)
	}
	componentDidMount(){
		this.props.getHome();
	}
}
const mapState = (state) => ({
	basictype: state.getIn(['home', 'basictype']),
	hotitem:state.getIn(['home', 'hotitem'])
});
const mapDispatch=(dispatch)=>({
	getHome(){
		dispatch(actionCreators.getHome())
	}
})
export default connect(mapState,mapDispatch)(Home);
