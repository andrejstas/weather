import React, { Component } from 'react';
import styled from 'styled-components';

const NoResultsBlock = styled.div`
  grid-column: 1 / 4;
  justify-self: center;
`;

export default class NoResults extends Component {
  render() {
    return (
      <NoResultsBlock>
        Enter a name of any city into the search bar above
      </NoResultsBlock>
    );
  }
}
