import React, { Component } from "react";
import Collapse from "@material-ui/core/Collapse";
import LazyLoad from "react-lazyload";

export default class MenuPic extends Component {
  render() {
    return (
      <Collapse in={this.props.open} timeout="auto" unmountOnExit={false}>
        <LazyLoad offset={100}>
          <img src={this.props.image} />
        </LazyLoad>
      </Collapse>
    );
  }
}