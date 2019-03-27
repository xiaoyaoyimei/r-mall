import React, { PureComponent } from 'react';
import { Redirect,Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import cookie from 'react-cookies';
import {
	LoginWrap,
	Logo,
  LoginWrapper,
  LoginBox
} from './style';
import {
  Form, Icon, Input, Button,
} from 'antd';
class Login extends PureComponent {
	handleSubmit = (e) => {
	e.preventDefault();
	this.props.form.validateFields((err, values) => {
		if (!err) {
			console.log('Received values of form: ', values);
        this.props.login(values.userName, values.password)
		}
	})
}
	render() {
		const { loginStatus } = this.props;
		const { getFieldDecorator } = this.props.form;
		if (!loginStatus) {
			return (
        <LoginWrap>
        <div className="nav">
        <div className="main_width"><Link to="/"><Logo /></Link>
        </div></div>
        <LoginWrapper>
                <div className="main_width">
        <LoginBox>
		 <Form onSubmit={this.handleSubmit} className="login-form">
			 <Form.Item>
				 {getFieldDecorator('userName', {
					 rules: [{ required: true, message: '请输入手机号' }],
				 })(
					 <Input className="h42" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="手机号" />
				 )}
			 </Form.Item>
			 <Form.Item>
				 {getFieldDecorator('password', {
					 rules: [{ required: true, message: '请输入密码' }],
				 })(
					 <Input className="h42"  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
				 )}
			 </Form.Item>
			 <Form.Item>

				 <Button type="primary" htmlType="submit" className="login-form-button">
					登录
				 </Button>
			 </Form.Item>
		 </Form>

         </LoginBox>
              </div>
     </LoginWrapper>
     </LoginWrap>
			)
		}else {
			return <Redirect to='/'/>
		}
	}
}

const mapState = (state) => ({
	loginStatus: cookie.load('login')
})
// const loginUser = () => {
//     return cookie.load('current-user');
// };
//
// const isLogin = () => {
//     const user = loginUser();
//     return typeof (user) === 'object';
// };

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem){
		dispatch(actionCreators.login(accountElem, passwordElem))
	}
})
Login = Form.create({})(Login);
export default connect(mapState, mapDispatch)(Login);
