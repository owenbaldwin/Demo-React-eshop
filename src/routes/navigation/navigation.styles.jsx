import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  /* background-color: #29263A; */

  background:
    linear-gradient(#29263A, #29263A) padding-box,
    linear-gradient(135deg, #DDBC9C, #E19B6A) border-box;
  border-radius: 10px;
  border: 2px solid transparent;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 450px;
  padding: 25px;
  display: flex;
  align-items: center;
  filter: drop-shadow(0px 0px 7px #E19B6A);

`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  background-image: linear-gradient(
      135deg,
      #DDBC9C 0%,
      #E19B6A 50%
    );
  color: transparent;
  -webkit-background-clip:text;
`;
