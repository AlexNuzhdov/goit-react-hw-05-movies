import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
    display: grid;
    max-width: calc(100vw - 35px);
    grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
    grid-gap: 16px;
    margin: 10px auto 0;
    padding: 0 0 30px;
    list-style: none;
`;

export const LinkTitle = styled(Link)`
  text-decoration: none;
  color: white;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #2196f3;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Item = styled.li`

  &:nth-last-child(-n + 2) {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 500;
  text-transform: uppercase;
  justify-content: center;
  display: flex;
`;

export const Img = styled.img`
  width: 340px;
  height: 400px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
  transform: scale(1.03);
  cursor: pointer;
  }
`;