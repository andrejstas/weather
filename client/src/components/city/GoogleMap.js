import React, { Component } from 'react';
import styled from 'styled-components';

const GoogleMapBlock = styled.div`
  height: 300px;
  width: 100%;
`;

class GoogleMap extends Component {
  componentDidMount() {
    const google = window.google;
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      },
      mapTypeControl: false,
      streetViewControl: false
    });
  }

  render() {
    return <GoogleMapBlock ref="map" />;
  }
}

export default GoogleMap;
