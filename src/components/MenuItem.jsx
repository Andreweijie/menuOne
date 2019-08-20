import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import MenuPic from "./MenuPic";

export default class MenuItem extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  check1 = () => {
    /*this.test = setTimeout(() => {
      this.setState({
        open: !this.state.open
      });
    }, 500);*/
    this.setState({
      open: !this.state.open
    });
  };
  onChange = isVisible => {
    console.log(isVisible);
    if (isVisible == false) {
      setTimeout(() => {
        this.setState({
          open: false
        });
      }, 4000);
    }
  };
  render() {
    return (
      <div>
        <List component="div" disablePadding>
          <ListItem button onClick={this.check1}>
            <div id="menubox">
              <div id="itembox">
                <p className="item">{this.props.name}</p>
                <p className="item">{this.props.price}</p>
              </div>

              <span className="description">{this.props.description}</span>
              <br />
              <span className="description">{this.props.description2}</span>
              <span className="fishes">{this.props.fishes}</span>
            </div>
          </ListItem>

          <MenuPic open={this.state.open} image={this.props.image} />
          <hr />
        </List>
      </div>
    );
  }
}
