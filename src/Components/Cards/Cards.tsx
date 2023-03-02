import React from "react";
import { Container, DataCard, TitleCard } from "./styled";

interface ICardProps {
  titleCard: string;
  valueCard: string | number | undefined;
  unity?: string;
  classname?: string;
}

const Cards: React.FC<ICardProps> = ({ titleCard, unity, valueCard }) => {
  return (
    <Container>
      <TitleCard>{titleCard}</TitleCard>
      <DataCard>
        {valueCard} {unity}
      </DataCard>
    </Container>
  );
};

export default Cards;
