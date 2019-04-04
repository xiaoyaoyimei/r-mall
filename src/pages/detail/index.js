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
import { message } from 'antd';
const hide= message.loading('Action in progress..', 0);
class Detail extends Component {
 
//	switchbig(pic,event){
//   this.props.shangp.product.modelImg=pic;
//	}
	render() {
		 const { shangp } = this.props;
	if(shangp.product.modelImg!=""){
		return(
			<DetailWrapper>
			<div className="spec">
			<div className="big">
			       	<img alt="小图片" className="r" src={global.constants.baseUrl+shangp.product.modelImg}/>
			</div>
			<ul className="small">
			    {
          shangp.productImageList.map((item, index) => {
              return(
                <li  key={index} onClick={() => {this.props.toggleDraw(item.listImg)}}>
                	<img alt="小图片" src={global.constants.baseUrl+item.smallImg}/>
                  </li>
                )
               })
           }
	
			</ul>
			</div>
			<div></div>
			</DetailWrapper>)}
		 else{
		 	return null
		}

	}
		componentDidMount(){
			this.props.getDetail();
			hide();
	}
}
const mapState = (state) => ({
	shangp:state.getIn(['detail', 'shangp']),
});
const mapDispatch=(dispatch)=>({
	getDetail(){
		dispatch(actionCreators.getDetail())
	},
	toggleDraw(img){
		dispatch(actionCreators.changeBig(img))
	}
})
export default connect(mapState,mapDispatch)(Detail);
