import styled from 'styled-components';


export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};

`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #B68E6E;
  border-radius: 5px;
  background-color: #DDBC9C;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: black;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #B68E6E; */
  margin: 0 7.5px 15px;
  overflow: hidden;
  background:
    linear-gradient(#29263A, #29263A) padding-box,
    linear-gradient(135deg, #DDBC9C, #E19B6A) border-box;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    transition: 0.5s;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }


  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;
