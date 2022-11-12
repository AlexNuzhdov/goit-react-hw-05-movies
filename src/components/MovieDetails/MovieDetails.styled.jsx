import styled from 'styled-components';
import { NavLink } from "react-router-dom";


export const Button = styled.button`
    border: 1px solid #2196f3;
    border-radius: 10px;
    box-shadow: 1px 2px 2px 0 rgb(0,0,0/.5);
    cursor: pointer;
    font-weight: 700;
    margin-bottom: 15px;
    margin-top:10px;
    padding: 8px 10px;
    text-align: center;
    transition: box-shadow .25s linear;
    width: 80px;
    background-color: white;
    &:hover {
    background-color: #2196f3;
    color: #fff;
    }
    
`
export const StyledDiv = styled.div`
 display: flex;

` 
export const StyledImg = styled.img`
   height: auto;
 

  @media screen and (min-width: 768px) {
    max-width: 300px;
  }

` 
  
    
export const Link = styled(NavLink)`
 color: black;
 text-decoration: none;
 margin-right: 10px;
 font-weight: 500;
 border: 1px solid #2196f3;
 border-radius: 10px;
 background-color: white;
` 
export const Thumb = styled.div`
 display: flex;

` 
export const StyletTitle = styled.h3`
 margin-top: 0;
 
` 
export const StyletDiv = styled.div`
  margin-right: 10px;
 
` 
export const ThumbTitle = styled.div`
   display: flex;
 
` 
export const StyledGetYear = styled.p`
   margin-top: 3px;
   margin-left: 5px;
 
` 
export const StyledP = styled.p`
   padding: 8px 10px;
   margin: 0;

    &:hover {
    background-color: #2196f3;
    color: #fff;
    border-radius: 10px;
    }
`