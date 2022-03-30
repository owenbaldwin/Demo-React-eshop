import styled from 'styled-components';


export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
    background:
    linear-gradient(#29263A, #29263A) padding-box,
    linear-gradient(135deg, #DDBC9C, #E19B6A) border-box;
    border-radius: 10px;
    border: 1px solid transparent;
  }
`;


export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  .name {
    font-size: 16px;
    background-image: linear-gradient(
      135deg,
      #DDBC9C 0%,
      #E19B6A 50%
    );
    color: transparent;
    -webkit-background-clip:text;
  }
  .price {
    font-size: 16px;
    background-image: linear-gradient(
      135deg,
      #DDBC9C 0%,
      #E19B6A 50%
    );
    color: transparent;
    -webkit-background-clip:text;
  }
`;
