import styled from 'styled-components';

export const Title =  styled.h3`
  color: ${({theme})=>theme.colors.dark};
  font-size: 2rem;
  margin-bottom: 30px;

  @media (min-width: 744px) {
    font-size: 3rem;
  }
`;

export const Container =  styled.section`
  padding: 50px ${({theme})=>theme.spacings['padding-horizontal']};

  @media (max-width: ${({theme})=>theme.breakpoints.desktop_xsm}) {
    padding: 50px ${({theme})=>theme.spacings['padding-horizontal-mobile']}
  }
  @media (min-width: ${({theme})=>theme.breakpoints.desktop_xsm}) and (max-width: ${({theme})=> theme.breakpoints.desktop_sm}) {
    padding: 50px ${({theme})=>theme.spacings['padding-horizontal-sm']};
  }
  @media (min-width: ${({theme})=> theme.breakpoints.desktop_sm}) and (max-width: ${({theme})=>theme.breakpoints.desktop_md}) {
    padding: 50px ${({theme})=>theme.spacings['padding-horizontal-md']};
  }

`;

export const ImageBox = styled.picture`
  width: 100%;
  height: 100%;

  img, svg {
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }

`;