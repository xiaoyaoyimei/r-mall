import React, {
	Component
} from 'react';
import '../../base/config.dev';
import { connect } from 'react-redux';
import {
	DetailWrapper,
	Title,
	Content
} from './style';
import {actionCreators}from './store'
class Detail extends Component {
	render() {
		{/*const {content}=this.props;
		let wen='',title='';
		if(content.length>0){
			title=content[0].title;
			 wen=content[0].content;
		}
		return(
			<DetailWrapper>这是详情页<Title>{title}</Title>
			<Content>{wen}</Content></DetailWrapper>
		)*/}
			const { product } = this.props;
	
//		const newproduct=product.toJS();
		return(
			<DetailWrapper>
			<div className="spec">
			<div className="big">
			
			</div>
			</div>
			<div></div>
			</DetailWrapper>
		)
	}
		componentDidMount(){
			console.log(this.props.match.params.id)
			this.props.getDetail();
	}
}
const mapState = (state) => ({
	product:state.getIn(['detail', 'product']),
});
const mapDispatch=(dispatch)=>({
	getDetail(){
		dispatch(actionCreators.getDetail())
	}
})
export default connect(mapState,mapDispatch)(Detail);
