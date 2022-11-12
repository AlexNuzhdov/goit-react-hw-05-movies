import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const StyledUl= styled.ul`
display: flex;
list-style: none;
`
export const StyledLi= styled.li`
margin-left: 10px;
padding-top: 10px;


`

export const Link = styled(NavLink)`
   padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  text-transform: uppercase;  
  &.active {
    color: white;
    background-color: #2196f3;
  }
`
