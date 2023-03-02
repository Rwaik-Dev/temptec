import React from "react";
import Cards from "../Components/Cards/Cards";
import MainCard from "../Components/MainCard/MainCard";
import {
  CardHome,
  Container,
  DivCards,
  DivMainCard,
  Grafic,
  GraficTitle,
  SelectCities,
  SpanLabel,
  Title,
} from "./styles";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { woeidList } from "../Services/ListsData/WOAID";
import { resultApiType } from "../@types/listTypes";
import api from "../Services/Api/api";
import Loader from "../Components/Loaders/Loader";

const HomePage: React.FC = () => {
  const [readyToShow, setReadyToShow] = React.useState(false);
  const [cityWoeid, setCityWoeid] = React.useState<number>(455821);
  const [getData, setGetData] = React.useState<resultApiType>();

  const handlerChangeOption = React.useCallback((event: any) => {
    setCityWoeid(event.target.value);
  }, []);

  async function getCityData(woeid: number) {
    await api
      .get("", {
        params: { woeid: woeid },
      })
      .then((response) => {
        return setGetData(response.data.results);
      })
      .catch((err) => alert(err.response.data.message));
    setReadyToShow(true);
  }

  console.log(getData);

  React.useEffect(() => {
    getCityData(cityWoeid);
  }, [cityWoeid]);
  return (
    <>
      {readyToShow ? (
        <Container>
          <Title>Temp Tec</Title>
          <SelectCities onChange={handlerChangeOption}>
            {woeidList.map((cities, index) => (
              <option key={index} value={cities.woeid}>
                {cities.cidade}
              </option>
            ))}
          </SelectCities>
          <CardHome>
            <DivMainCard>
              <MainCard
                city={getData?.city_name}
                description={getData?.description}
                temperature={getData?.temp}
                date={getData?.date}
                hour={getData?.time}
                imgBackground={getData?.condition_slug}
              />
            </DivMainCard>
            <DivCards>
              <Cards
                titleCard={"Direção do vento"}
                valueCard={getData?.wind_direction}
                unity={"°"}
              />
              <Cards titleCard={"Condições"} valueCard={getData?.description} />
              <Cards
                titleCard={"Nebulisidade"}
                valueCard={getData?.cloudiness}
                unity={"%"}
              />
              <Cards
                titleCard={"Velocidade do vento"}
                valueCard={getData?.wind_speedy}
              />
              <Cards
                titleCard={"Humidade"}
                valueCard={getData?.humidity}
                unity={"%"}
              />
              <Cards
                titleCard={"Possibilidade de chuva"}
                valueCard={getData?.rain}
                unity={"%"}
              />
            </DivCards>
          </CardHome>
          <GraficTitle>Grafico da cidade de {getData?.city_name}.</GraficTitle>
          <SpanLabel>Resultado dos proximos 10 dias: </SpanLabel>
          <Grafic>
            <ResponsiveContainer>
              <LineChart data={getData?.forecast}>
                <CartesianGrid strokeDasharray={"4 1"} />
                <XAxis dataKey={"weekday"} />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#161616",
                    borderRadius: "5px",
                  }}
                  labelStyle={{ color: "#EEE", fontWeight: "bold" }}
                />
                <Legend iconType="wye" />
                <Line
                  name={"Temp Maxima"}
                  dataKey={"max"}
                  type={"monotone"}
                  stroke={"#FF1111"}
                />
                <Line
                  name={"Temp Minima"}
                  dataKey={"min"}
                  type={"monotone"}
                  stroke={"#00df0b"}
                />
                <Line
                  name={"Nebulosidade"}
                  dataKey={"cloudiness"}
                  type={"monotone"}
                  stroke={"#ff9100"}
                />
                <Line
                  name={"Nivel de chuva"}
                  dataKey={"rain"}
                  type={"monotone"}
                  stroke={"#ffee00"}
                />
                <Line
                  name="Possibilidade de chuva"
                  type={"monotone"}
                  dataKey={"rain_probability"}
                  stroke={"#7700ff"}
                />
              </LineChart>
            </ResponsiveContainer>
          </Grafic>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HomePage;
