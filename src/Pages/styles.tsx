import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.background};
  width: 100%;
  height: 100%;
  padding: 10px;
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.color.text.main};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

export const CardHome = styled.div`
  width: 99%;
  height: 270px;
  display: flex;
  flex-direction: row;
`;

export const DivMainCard = styled.div`
  max-width: 370px;
  max-height: 270px;
  width: 370px;
  height: 270px;
`;
export const DivCards = styled.div`
  height: 270px;
  width: calc(100% - 370px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const SelectCities = styled.select`
  width: 30%;
  margin: 5px 0;
  height: 30px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  padding: 0 15px;
  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.text.main};
  option:hover {
    background-color: ${(props) => props.theme.color.card.cardBackgroundColor};
  }
`;

export const Grafic = styled.div`
  margin-top: 20px;
  width: 95%;
  background-color: ${(props) => props.theme.color.background};
  height: 420px;
  overflow: hidden;
`;

export const GraficTitle = styled.h2`
  color: ${(props) => props.theme.color.text.main};
  margin-top: 20px;
  font-size: 1.6rem;
`;

export const SpanLabel = styled.span`
  color: ${(props) => props.theme.color.text.main};
  font-size: 1rem;
`;
