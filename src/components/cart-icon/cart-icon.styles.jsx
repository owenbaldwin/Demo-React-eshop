import styled from 'styled-components';
import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 34px;
  height: 34px;
  filter: drop-shadow(0px 0px 1px #E19B6A);
`;


export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 15px;
  font-weight: bold;
  bottom: 9px;
  background-image: linear-gradient(
      135deg,
      #DDBC9C 0%,
      #E19B6A 50%
    );
  color: transparent;
  -webkit-background-clip:text;
`;
