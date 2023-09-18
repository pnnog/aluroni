import { useNavigate } from 'react-router-dom';
import {ReactComponent as NotFoundImage} from 'assets/NotFound/not_found.svg';
import * as S from './styles';

const NotFound = () => {
  
  const navigate = useNavigate();
  
  return(
    <S.Wrapper>
      <NotFoundImage/>  
      <S.GoBack> 
        <button onClick={()=> navigate(-1)}> Voltar </button>
      </S.GoBack>
    </S.Wrapper>
  );
};

export default NotFound;