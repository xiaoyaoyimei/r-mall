import styled from 'styled-components';
import logoPic from '../../static/logo.png';
export const Logo = styled.div`
width: 265px;
height: 42px;
background: url(${logoPic});
background-size: contain;
float:left;
`;
export const OneWrap=styled.div`
  padding-top: 35px;
padding-bottom: 23px;
background-color: #fff;
border-bottom: 2px solid red;
`;

export const Main=styled.div`
width:1200px;
margin:0 auto;
overflow:hidden;
`;
export const Span=styled.span`
font-size: 24px;
color: #333;
line-height: 24px;
float:left;
margin-left:10px
`;

export const NoLogin=styled.div`
display:flex;
min-height:300px;
justify-content:center;
flex-direction: column;
align-items: center;
background:#eee;
h1{
  font-weight: 700;
font-style: normal;
font-size: 36px;
color: #999;
}
button{
  width: 180px;
height: 50px;
border: 1px solid red;
border-radius: 0;
box-shadow: none;
font-weight: 400;
font-size: 18px;
color: red;
text-align: center;
background-color: #fff;
margin-top: 15px;
display: inline-block;
line-height: 50px;
}
`;
