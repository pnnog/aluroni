import { TagProps } from './types';
import * as S from './styles';

const Tag = ({children, background, highlight = false}:TagProps) =>{

  return <S.Wrapper $background = {background} $highlight={highlight}>{children}</S.Wrapper>;
};

export default Tag;