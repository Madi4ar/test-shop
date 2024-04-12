import * as React from "react"
import { Link } from "gatsby"
import logo from '../images/Group 207.png';
import mall from '../images/local_mall.png';
import styled from 'styled-components';

const Logo = styled.img`
  width:80px;
`
const LocalMall = styled.img`
  width:40px;
  margin:0;
`

const HeaderComponent = styled.div`
  background:white;
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.75);
  padding:10px;
  display:flex;
  align-items:center;
  justify-content:space-between
`
const StyledLink = styled(Link)`
  display:flex;
  flex-direction:column-reverse;
  text-decoration:none;
  position:relative;
  & div {
    color:white;
    background:red;
    width:20px;
    height:20px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:25px;
    padding:10px;
  }
`

const Header = ({ selectedProducts }) => {
  return (
    <HeaderComponent>
      <Logo
        alt="Gatsby logo"
        src={logo}
      />
      <StyledLink
        to="/buy" state={{ selectedProducts: selectedProducts }}
      >
        <LocalMall src={mall} />
      </StyledLink>
    </HeaderComponent>
  )
}

export default Header
