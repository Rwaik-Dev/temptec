import styled from "styled-components";

export const Container = styled.div`
  width: calc((100% - 370px) / 3);
  min-width: 270px;
  height: 130px;
  border-radius: 5px;
  padding-top: 5px;
  max-height: 130px;
  background-color: ${(props) => props.theme.color.card.cardBackgroundColor};
`;

export const TitleCard = styled.h3`
  color: ${(props) => props.theme.color.text.main};
  font-size: 1.6rem;
  text-align: center;
`;

export const DataCard = styled.p`
  color: ${(props) => props.theme.color.text.main};
  font-size: 2.6rem;
  text-align: center;
`;
