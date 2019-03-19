import styled from 'styled-components';
import logoPic from '../../static/logo.png';
export const NavWrapper = styled.div`
	background:#f4f6f8;
  padding-top:35px;
  padding-bottom:28px;
`;
export const MainWidth=styled.div`
	width:1200px;
	margin:0 auto;
	overflow:hidden;
`;
export const Logo = styled.div`
width: 265px;
height: 42px;
background: url(${logoPic});
background-size: contain;
float:left;
`;
export const NavWrap = styled.div`
float:left;
margin-top: 5px;
a{
	font-size: 16px;
	font-weight: 700;
	color: #313131;
	margin-left:13px;
	margin-right:13px;
}
`;
export const SearchWrap=styled.div`{
	    background: #fff;
			float: right;
			input{
				width: 160px;
border: 1px solid #d9d9d9;
float: left;
padding-left: 5px;
height: 35px;
    display: inline-block;

			}
}`
export const SearchBtn=styled.div`{
	border-width: 1px 1px 1px 0;
border-style: solid;
border-color: #d9d9d9;
width: 35px;
background: #fff;
height: 35px;
    display: inline-block;
		line-height:35px;
		text-align:center;
	}`
