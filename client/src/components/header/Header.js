import React, { Component } from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import Reset from './Reset';

const HeaderBlock = styled.div`
  grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  box-shadow: rgba(22, 23, 26, 0.15) 0px 4px 8px;
  background: rgb(22, 23, 26);
  color: rgb(163, 175, 191);
  align-items: center;
  @media (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Logo = styled.h1`
  padding: 0;
  margin: 0 0 0 1rem;
  line-height: 2rem;
  font-size: 1.3rem;
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderBlock>
        <Logo>Weather</Logo>
        <SearchForm />
        <Reset />
      </HeaderBlock>
    );
  }
}
