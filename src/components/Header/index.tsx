import * as S from './styles';
import headerImage from 'assets/cart/header.png'; 

const Header = () =>{
  return(
    <S.Wrapper $image={headerImage}>
      <div>
          A casa do código e da massa
      </div>
    </S.Wrapper>
  );
};

export default Header;