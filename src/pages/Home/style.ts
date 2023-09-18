import styled from 'styled-components';

export const RecommendedWrapper = styled.div`
  border-radius: 2px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  margin-bottom: 30px;

`;

export const Recommended =  styled.div``;


export const Button = styled.button`
  background-color: ${({theme})=> theme.colors.red};
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: bold;
  padding: 10px 0;
  transition: .2s ease;
  width: 100%;
  &:hover {
    background-color: ${({theme})=> theme.colors['red-dark']};
  }
`;


export const ImageBox =  styled.picture`
  width: 300px;
  margin-bottom: 10px;

  img {
    border-radius: 8px;
    width: 100%;
    }
`;


export const OurHouseWrapper = styled.div`
  margin-bottom: 100px;
  position: relative;
  width: 100%;

  img {
    border-radius: 5px;
    width: 100%;
  }

`;

export const OurHouseAddress = styled.div`
  align-items: center;
  background-color: ${({theme})=> theme.colors.dark};
  border-radius: 5px;
  bottom: -45px;
  color: white;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  height: 100px;
  justify-content: center;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 200px;
`;

