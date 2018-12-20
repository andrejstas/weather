import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeAllCities } from '../../actions/city';
import { removeAllFromStorage } from '../../helper/storage';

const ResetBlock = styled.div`
  justify-self: end;
`;

const Button = styled.button`
  padding: 0.5em;
  margin: 0.5em;
  color: black;
  border: none;
  border-radius: 3px;
  background-color: #3c3c3c;
  color: #a0afc0;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

class Reset extends Component {
  onButtonClick = e => {
    e.preventDefault();
    removeAllFromStorage();
    this.props.removeAllCities();
  };

  render() {
    return (
      <ResetBlock>
        <Button onClick={this.onButtonClick}>Reset</Button>
      </ResetBlock>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeAllCities: () => dispatch(removeAllCities())
});

export default connect(
  null,
  mapDispatchToProps
)(Reset);
