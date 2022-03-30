import styled from 'styled-components';


export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;




export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #DDBC9C;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  background-image: linear-gradient(
    135deg,
    #DDBC9C 0%,
    #E19B6A 50%
  );
  color: transparent;
  -webkit-background-clip:text;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  background-image: linear-gradient(
    135deg,
    #DDBC9C 0%,
    #E19B6A 50%
  );
  color: transparent;
  -webkit-background-clip:text;
`;
