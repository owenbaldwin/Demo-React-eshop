import styled from 'styled-components';


export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  background:
    linear-gradient(#29263A, #29263A) padding-box,
    linear-gradient(135deg, #DDBC9C, #E19B6A) border-box;
  border-radius: 10px;
  border: 1px solid transparent;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  margin-top: 8px;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
    background:
      linear-gradient(#29263A, #29263A) padding-box,
      linear-gradient(135deg, #DDBC9C, #E19B6A) border-box;
    border-radius: 10px;
    border: 1px solid transparent;
  }
`;

export const COItemName = styled.span`
  width: 23%;
  background-image: linear-gradient(
    135deg,
    #DDBC9C 0%,
    #E19B6A 50%
  );
  color: transparent;
  -webkit-background-clip:text;
`;

export const COItemQuantity = styled.span`
  width: 23%;
  display: flex;
  background-image: linear-gradient(
    135deg,
    #DDBC9C 0%,
    #E19B6A 50%
  );
  color: transparent;
  -webkit-background-clip:text;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 10px;
    }
`;

export const COItemPrice = styled.span`
  width: 23%;
  background-image: linear-gradient(
    135deg,
    #DDBC9C 0%,
    #E19B6A 50%
  );
  color: transparent;
  -webkit-background-clip:text;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  background-image: linear-gradient(
    135deg,
    #DDBC9C 0%,
    #E19B6A 50%
  );
  color: transparent;
  -webkit-background-clip:text;
`;
