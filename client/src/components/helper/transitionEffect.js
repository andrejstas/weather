import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class TransitionEffect extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        component={React.Fragment}
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {this.props.children}
      </ReactCSSTransitionGroup>
    );
  }
}

export default TransitionEffect;
