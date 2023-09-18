import styled from 'styled-components';
import {ImageBox as ImageBoxStyles} from 'components/UI/index';



export const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
  justify-content: space-between;

  ${ImageBoxStyles}{
     max-width: 800px;
     margin: auto;
    };

    @media (min-width: 1700px){
      flex-direction: row;
    }
`;

export const AboutUsTexts = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  text-align: justify;
  gap: 20px;

  p{
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.3rem;

  }


  @media (min-width: 1024px) {
    p{
      font-size: 1.5rem;
    }

    justify-content: start;

    }

`;  

export const ImagesWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  ${ImageBoxStyles}{
      max-width: 600px;
      width: 100%;
    };

  @media (min-width: 744px){
    flex-direction:row;
    justify-content: space-between;
  }




`;

