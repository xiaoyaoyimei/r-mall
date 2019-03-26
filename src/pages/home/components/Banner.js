import React,{Component} from 'react';
import { Carousel } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../base/config.dev';
function onChange(a, b, c) {
  console.log(a, b, c);
}
class Banner extends Component{
	render(){
    const {
      list
    } = this.props;
		return (
			<div>
      <Carousel afterChange={onChange} >
          {
          list.map((item, index) => {
              return(
                <Link  key={index} to={'/detail/' + item.get('linkUrl')}>
                	<img alt="小图片" className="r" src={global.constants.baseUrl+item.get('imgUrl')}/>
                  </Link>
                )
               })
           }
         </Carousel></div>
		)
	}
}
const mapState = (state) => ({
	list: state.getIn(['home', 'poster']),
});
export default connect(mapState, null)(Banner);
