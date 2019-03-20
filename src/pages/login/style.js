import styled from 'styled-components';
import logoPic from '../../static/logo.png';
import bgPic from '../../static/bg.jpg';

export const LoginWrap = styled.div`
			.nav{
				padding-top: 35px;
		   	padding-bottom: 23px;
				.main_width{
					width:1200px;
					margin:0  auto;
				}
			}
`;
export const Logo = styled.div`
width: 265px;
height: 42px;
background: url(${logoPic});
background-size: contain;
`;
export const LoginWrapper = styled.div`
background: url(${bgPic})  scroll no-repeat 0 0;
height:650px;
.main_width{
	width:1200px;
	margin:0  auto;
	overflow:hidden;
	h4{
		font-size: 24px;
font-weight: 400;
color: #333;
height: 31px;
line-height: 31px;
margin-bottom: 20px;
	}
}
`;

export const LoginBox = styled.div`
margin-top:40px;
float:right;
z-index: 100;
width: 410px;
min-height: 530px;
background-color: #fff;
padding: 53px 46px;
.h42{
	height:50px;
}
.login-form-button{
	width: 320px;
		height:50px;
}
`;
