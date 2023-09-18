import casa from 'assets/about/casa.png';
import massa1 from 'assets/about/massa1.png';
import massa2 from 'assets/about/massa2.png';

import * as S from './styles';
import { ImageBox, Title } from 'components/UI';


const About = () =>{
  const images =  [massa1, massa2];
  
  return(
    <>
      <Title> Sobre nós</Title>

      <S.AboutUs>
        <ImageBox> 
          <img src={casa} alt="Casa Aluroni" /> 
        </ImageBox>
        <S.AboutUsTexts>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
          </p>
        
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
          </p>

          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
          </p>
        </S.AboutUsTexts>
      </S.AboutUs>

      <S.ImagesWrapper>
        {images.map( (image, index) => (
          <ImageBox key={index}>
            <img src={image} alt="Imagem de massa" />
          </ImageBox>
        ))}

      </S.ImagesWrapper>
        
    </>    
  );
};

export default About;