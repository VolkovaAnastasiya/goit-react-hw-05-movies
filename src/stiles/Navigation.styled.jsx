import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  margin: 20px;
  padding: 15px;
  font-size: 24px;
  font-weight: 500;
  border: 1px solid #d1edec;
  border-radius: 5px;
  &.active {
    color: #00a6ff;
    background-color: #d1edec;
  }
`;
