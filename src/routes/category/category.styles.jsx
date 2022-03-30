import styled from 'styled-components';


export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
  background-image: linear-gradient(
    135deg,
    #DDBC9C 0%,
    #E19B6A 50%
  );
  color: transparent;
  -webkit-background-clip:text;
`;
