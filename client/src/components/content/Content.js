import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import City from '../city/City';
import NoResults from './NoResults';
import TransitionEffect from '../helper/transitionEffect';
import { removeCity, addCity } from '../../actions/city';
import { removeFromStorage, getFromStorage } from '../../helper/storage';

const ContentBlock = styled.div`
  grid-column: center-start / center-end;
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  grid-gap: 2rem;
  grid-row-gap: 4rem;
  margin: 3rem 0;
  justify-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

class Content extends Component {
  handleDelete = city => {
    removeFromStorage(city);
    this.props.removeCity(city);
  };

  componentDidMount() {
    const cities = getFromStorage();

    if (cities !== undefined && cities !== null && cities.length > 0) {
      cities.forEach(city => {
        this.props.addCity(city);
      });
    }
  }

  render() {
    return (
      <ContentBlock>
        {this.props.cities.length === 0 && <NoResults />}
        <TransitionEffect>
          {this.props.cities.map(city => (
            <City
              information={city}
              onDelete={this.handleDelete}
              key={city.name}
            />
          ))}
        </TransitionEffect>
      </ContentBlock>
    );
  }
}

const mapStateToProps = ({ cities }) => {
  return {
    cities
  };
};

const mapDispatchToProps = dispatch => ({
  removeCity: city => dispatch(removeCity(city)),
  addCity: city => dispatch(addCity(city))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
