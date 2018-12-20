import React, { Component } from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
  grid-column: center-start / center-end;
  color: rgb(163, 175, 191);
  justify-self: center;
`;

export default class Header extends Component {
  render() {
    return <FooterBlock>Andrej Staš</FooterBlock>;
  }
}
