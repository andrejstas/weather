import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addCity } from '../../actions/city';
import { saveToStorage } from '../../helper/storage';

const SearchFormBlock = styled.div``;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: white;
  border: none;
  border-radius: 3px;
  background-color: #3c3c3c;
`;
const Button = styled.button`
  padding: 0.5em;
  margin: 0.5em;
  color: black;
  border: none;
  border-radius: 3px;
  background-color: #3c3c3c;
  color: #a0afc0;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

class SearchForm extends Component {
  state = {
    city: ''
  };

  onFormSubmit = e => {
    e.preventDefault();
    saveToStorage(this.state.city);
    this.props.addCity(this.state.city);
    this.setState({ city: '' });
  };

  onInputChange = e => {
    e.preventDefault();
    this.setState({ city: e.target.value });
  };

  render() {
    return (
      <SearchFormBlock>
        <Form onSubmit={this.onFormSubmit}>
          <Input
            placeholder="Type the name of your city..."
            value={this.state.city}
            onChange={this.onInputChange}
          />
          <Button>Search</Button>
        </Form>
      </SearchFormBlock>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCity: city => dispatch(addCity(city))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchForm);
