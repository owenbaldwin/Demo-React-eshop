import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 390px;
  align-items: center;
  position: relative;


  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    /* border-radius: 10px; */
    background:
      linear-gradient(#29263A, #29263A) padding-box,
      linear-gradient(135deg, #DDBC9C, #E19B6A) border-box;
    border-radius: 10px;
    border: 1px solid transparent;

  }
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .name {
    width: 90%;
    /* margin-bottom: 15px; */
    background-image: linear-gradient(
      135deg,
      #DDBC9C 0%,
      #E19B6A 50%
    );
    color: transparent;
    -webkit-background-clip:text;
  }

  .price {
    width: 10%;
    background-image: linear-gradient(
      135deg,
      #DDBC9C 0%,
      #E19B6A 50%
    );
    color: transparent;
    -webkit-background-clip:text;
  }
`;
