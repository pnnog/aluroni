import styled from 'styled-components';



type ItemProps = {
  $expanded:boolean
}

const modifiers ={
  isExpanded: ()=>`
  cursor:default ;
  @media (min-width: 980px){
    flex-direction: column;

    > picture{
      max-width: 100%;
    }
  }
  `
};


export const Item =  styled.div<ItemProps>`

  display: flex;
  flex-direction:column;
  width: 100%;
  gap: 20px;
  cursor: pointer;
  padding: 20px;
  border-radius: 8px;
  
  
  &:hover{
    background-color: ${({theme, $expanded})=> !$expanded?theme.colors.grey:'' };
  }

  @media (min-width: 980px){
    flex-direction: row;

    > picture{
      max-width: 240px;
    }
  }

  ${({$expanded})=> !!$expanded && modifiers.isExpanded()};
`;


export const BoxImage = styled.picture`
   width: 100%;
  
    img {
      border-radius: 8px;
      width: 100%;
    }
`;
export const Description = styled.div`
  display: flex;
  flex-direction:column;
  flex: 1;
`;

export const TitleWrapper = styled.div`
  h2{
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
      font-size: 1.3rem;
      font-weight: 600;
      max-width: 600px;
      margin-bottom: 20px;
      color: ${({theme})=> theme.colors['dark-grey']}
    }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
  max-width: 700px;
`;


