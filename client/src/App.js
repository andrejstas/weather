import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';

const store = configureStore();

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
  }
  body{
    background: rgb(245, 248, 252);
    font-family: 'Roboto', sans-serif;
  }
  h1{
    font-family: 'Montserrat', sans-serif;
  }
  .fade-enter {
    opacity: 0;
    transform: translateY(40px);
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 500ms ease-in;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave.fade-leave-active {
    opacity: 0;
    transition: all 500ms ease-in;
  }
`;

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      3,
      [col-start] minmax(min-content, 20rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
  gap: 20px;
  grid-auto-rows: minmax(1rem, auto);
  grid-template-rows: 3rem min-content 3rem;
  min-height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Normalize />
        <GlobalStyles />
        <Wrapper>
          <Header />
          <Content />
          <Footer />
        </Wrapper>
      </Provider>
    );
  }
}

export default App;
