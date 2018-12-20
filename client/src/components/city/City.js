import React, { Component } from 'react';
import styled from 'styled-components';
import {
  kelvinToCelsius,
  metersToKm,
  mbarToKPa,
  timestampToTime,
  windDirection
} from '../../helper/weather';
import GoogleMap from './GoogleMap';

const CityBlock = styled.div`
  display: grid;
  background: rgb(255, 255, 255);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(223, 231, 239);
  border-image: initial;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: rgba(22, 23, 26, 0.15) 0px 4px 38px;
`;
const Title = styled.div`
  background: #9628ce;
  line-height: 4rem;
  text-align: center;
  font-size: 1.4rem;
  color: #fff;
`;
const MainInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;

  img {
    background: #fff;
    transform: translateY(-1rem);
    border: 2px solid #999;
    border-radius: 50%;
    box-shadow: rgba(22, 23, 26, 0.15) 0px 4px 8px;
    justify-self: center;
  }
  div {
    margin: 0.9rem 0.7rem 0;
    color: #333;
    font-size: 0.9rem;
  }
`;
const DeleteButton = styled.button`
  background: #f3f8fc;
  position: absolute;
  bottom: 0.3rem;
  color: #9f9f9f;
  left: 0.3rem;
  padding: 0.3rem 0.5rem;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`;

const AdditionalInfo = styled.div`
  display: grid;
  padding: 0.7rem;
  color: #999;
  grid-template-columns: 2fr 1fr;
  grid-row-gap: 0.4rem;
  font-size: 0.8rem;
`;

const Key = styled.div``;
const Value = styled.div`
  justify-self: end;
`;

export default class City extends Component {
  render() {
    const info = this.props.information;
    const name = info.name;
    const icon = info.weather[0].icon;
    const temp = info.main.temp;
    const humidity = info.main.humidity;
    const visibility = info.visibility;
    const pressure = info.main.pressure;
    const sunrise = info.sys.sunrise;
    const sunset = info.sys.sunset;
    const clouds = info.clouds.all;
    const windSpeed = info.wind.speed;
    const angle = info.wind.deg;
    const { lon, lat } = info.coord;

    return (
      <CityBlock>
        <Title>{name}</Title>
        <MainInfo>
          <div>Temp.: {kelvinToCelsius(temp)}°C</div>
          <img
            alt="icon"
            src={`https://openweathermap.org/img/w/${icon}.png`}
          />
          <div>Humi.: {humidity}%</div>
        </MainInfo>
        <AdditionalInfo>
          <Key>Visibility</Key>
          <Value>{metersToKm(visibility)} km</Value>
          <Key>Pressure</Key>
          <Value>{mbarToKPa(pressure)} kPa</Value>
          <Key>Clouds</Key>
          <Value>{clouds} %</Value>
          <Key>Wind Speed</Key>
          <Value>{windSpeed} km/s</Value>
          <Key>Wind Direction</Key>
          <Value>{windDirection(angle)}</Value>
          <Key>Sunrise</Key>
          <Value>{timestampToTime(sunrise)}</Value>
          <Key>Sunset</Key>
          <Value>{timestampToTime(sunset)}</Value>
        </AdditionalInfo>
        <GoogleMap lon={lon} lat={lat} />
        <DeleteButton
          onClick={() => {
            this.props.onDelete(name);
          }}
        >
          Delete city
        </DeleteButton>
      </CityBlock>
    );
  }
}
