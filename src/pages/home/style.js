import styled from 'styled-components';
export const HomeWrapper = styled.div `
	width:1200px;
	margin:20px auto 0;
	height:100%;
	.img{
		width:625px;
		height:270px;
		display:block;
		margin-bottom:20px
	}
`
export const HomeLeft = styled.div `
	padding-left:15px;
	box-sizing:border-box;
	width:66.66%;
	float:left;
`
export const HomeRight = styled.div `
	width:29.16667%
	float:right;
	.recommend{
		width:100%;
	}
`
export const ListItem = styled.div `
padding:20px 0;
border-top:1px solid #ddd;
position:relative;
.r{
	    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    width: 150px;
    height: 100px;
        border-radius: 4px;
    border: 1px solid #f0f0f0;
}
`
export const ListLeft = styled.div `
width:458px`
export const ListTitle = styled.div `
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;`

export const ListContent = styled.p `
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;`

export const LoadMore = styled.div `
	cursor:pointer;
       width: 100%;
    height: 40px;
    line-height:40px;
    margin: 30px auto 60px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #fff;
    background-color: #a5a5a5;
    display: block;`
		export const Ul=styled.div`
		    margin-top: 10px;
				margin-left:-11px;
				overflow:hidden;
				.li{
					float: left;
    position: relative;
    cursor: pointer;
		margin-left:11px;
				}
				.normol{
					font-size: 24px;
color: #fff;
position: absolute;
top: 35px;
left: 40px;
				}
		`
		export const Hot=styled.div`
		padding-top: 35px;
padding-bottom: 8px;
font-size: 25px;
color: #313131;
`
export const One=styled.ul`
overflow:hidden;
 li{
	 text-align: center;
font-size: 13px;
position: relative;
width: 292px;
height: 370px;
cursor: pointer;
float: left;
border: 1px solid transparent;
transition: border-color .1s ease;
 }
 li:hover{
    border-color: #ddd;

 }
 em{
	 position: absolute;
left: 15px;
top: 15px;
width: 51px;
height: 20px;
text-align: center;
border: 2px solid #080103;
color: #000;
font-size: 11px;
font-weight: 700;
line-height: 17px;
 }
 a{
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
 }
 img{
	 max-height: 290px;
max-width: 290px;
display: block;
 }
 h6{
	 color: #111;
    font-size: 13px;
 }
 p{
	 color: #888;
margin-top: 5px;
margin-bottom: 10px;
text-align: left;
padding: 0 5px;
 }
 span{
	     font-weight: 700;
			     color: #ff0037;
 }

`
