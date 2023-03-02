import React from "react";
import {
  Container,
  CityTitle,
  Informations,
  Temperature,
  DateInformation,
} from "./styled";

interface IPropsMainCard {
  city: string | undefined;
  description: string | undefined;
  temperature: number | undefined;
  date: string | undefined;
  hour: string | undefined;
  imgBackground: string | undefined;
}

const MainCard: React.FC<IPropsMainCard> = ({
  city,
  description,
  date,
  hour,
  temperature,
  imgBackground,
}) => {

  const source = imgBackground?.toString()
  const image = require("../../Assets/200px/"+ source +".png")

  return (
    <Container urlBackgroundImage={image}>
      <CityTitle>{city}</CityTitle>
      <Informations>{description}</Informations>
      <Temperature>{temperature} °C</Temperature>
      <DateInformation>
        {date} {hour}
      </DateInformation>
    </Container>
  );
};

export default MainCard;
