import styled from 'styled-components';


export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  /* background-color: black; */
  background: linear-gradient(
      135deg,
      #DDBC9C 0%,
      #E19B6A 50%
    );
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: 0.8s;
  border-radius: 5px;

  &:hover {
    transition: 0.8s;
    background: linear-gradient(
      225deg,
      #DDBC9C 0%,
      #E19B6A 50%
    );
    color: black;
    /* border: 1px solid black; */
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  /* background-color: #4285f4; */
  background: linear-gradient(
      135deg,
      #B68E6E 0%,
      #C59976 50%
    );
  color: black;

  &:hover {
    background: linear-gradient(
      225deg,
      #B68E6E 0%,
      #C59976 50%
    );
    color: white;
  }
`;


export const InvertedButton = styled(BaseButton)`
  color: black;

  &:hover {
    color: white;
  }
`;
