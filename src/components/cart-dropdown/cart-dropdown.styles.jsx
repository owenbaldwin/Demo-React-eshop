import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }

  background:
    linear-gradient(#29263A, #29263A) padding-box,
    linear-gradient(135deg, #DDBC9C, #E19B6A) border-box;
  border-radius: 10px;
  border: 2px solid transparent;
  /* transition: 0.3s; */
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  background-image: linear-gradient(
      135deg,
      #DDBC9C 0%,
      #E19B6A 50%
    );
  color: transparent;
  -webkit-background-clip:text;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;


// .cart-dropdown-container {
//   position: absolute;
//   width: 240px;
//   height: 340px;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 90px;
//   right: 40px;
//   z-index: 5;

  // .empty-message {
  //   font-size: 18px;
  //   margin: 50px auto;
  // }

  // .cart-items {
  //   height: 240px;
  //   display: flex;
  //   flex-direction: column;
  //   overflow: scroll;
  // }

//   button {
//     margin-top: auto;
//   }
// }
