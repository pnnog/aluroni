import styled from 'styled-components';

type WrapperProps = {
  $image:string
}

export const Wrapper = styled.header<WrapperProps>`

  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${({$image})=> $image});
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  padding: 0 100px;


  @media (min-width: 744px) {
    padding:   0px ${({theme})=>theme.spacings['padding-horizontal-mobile']};
    justify-content: start;

  }
  
  @media (min-width: ${({theme})=>theme.breakpoints.desktop_xsm}) and (max-width: ${({theme})=> theme.breakpoints.desktop_sm}) {
    padding: 0px ${({theme})=>theme.spacings['padding-horizontal-sm']};
  }

  @media (min-width: ${({theme})=> theme.breakpoints.desktop_sm}) {
    padding: 0px ${({theme})=>theme.spacings['padding-horizontal']};
  }
  
  > div {
    color: white;
    font-size: 3rem;
    max-width: 400px;
    width: 100%;

    @media (min-width: 744px) {
      font-size: 5rem; 
    }
  }
`;


