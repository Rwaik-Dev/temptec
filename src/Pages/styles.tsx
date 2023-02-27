import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => props.theme.color.background } ;
    width: 100vw ;
    height: 100vh ;
    padding: 10px;
`
export const Title = styled.h1`
    color: ${(props) => props.theme.color.text.main};
`;

export const CardHome = styled.div`
    background-color: ${(props) => props.theme.color.card.cardBackgroundColor};
    width: auto ;
    height: 100px ;
`;

export const SwitchTheme = styled.button`
    width: 120px;
    height: 30px ;

`;