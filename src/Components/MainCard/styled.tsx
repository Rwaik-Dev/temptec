import styled from "styled-components";

interface IContainerProps {
  urlBackgroundImage: string | undefined;
}

export const Container = styled.div<IContainerProps>`
  padding: 10px;
  padding-left: 20px;
  max-width: 370px;
  max-height: 270px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  ::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-image: url(${props => props.urlBackgroundImage});
    background-size: cover;
    background-position: center;
    opacity: 0.6;
  }
`;

export const CityTitle = styled.h2`
  font-size: 1.6rem;
  position: relative;
  z-index: 2;
  color: ${(props) => props.theme.color.text.main};
`;

export const Informations = styled.h4`
  font-size: 1rem;
  position: relative;
  z-index: 2;
  color: ${(props) => props.theme.color.text.main};
`;

export const Temperature = styled.p`
  width: 100%;
  margin-top: 10px;
  font-weight: bold;
  height: 70px;
  padding-left: 20px;
  font-size: 4.5rem;
  position: relative;
  z-index: 2;
  color: ${(props) => props.theme.color.text.main};
`;

export const DateInformation = styled.p`
  position: relative;
  margin-top: 50px;
  font-weight: bold;
  font-size: 1.7rem;
  z-index: 2;
  color: ${(props) => props.theme.color.text.main};
`;
