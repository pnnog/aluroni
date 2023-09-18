import {ReactComponent as Logo} from '../../assets/logo.svg';

import * as S from './styles';

function Footer() {
  return (
    <S.Wrapper>
      <S.Content>
        <Logo />
      </S.Content>
    </S.Wrapper>
  );
}

export default Footer;