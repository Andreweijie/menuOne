import React, { Component } from "react";
import { Icon } from "flwww";
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
      open: false,
      arrow: "chevronDown"
    };
  }

  check1 = () => {
    /*this.test = setTimeout(() => {
      this.setState({
        open: !this.state.open
      });
    }, 500);*/
    this.setState({
      open: !this.state.open,
      arrow: this.state.arrow == "chevronDown" ? "chevronUp" : "chevronDown"
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

              <div className="arrow">
                <Icon type={this.state.arrow} className="arrow" />
              </div>

              <span className="fishes">{this.props.fishes}</span>
            </div>
          </ListItem>
          <MenuPic
            open={this.state.open}
            image={this.props.image}
            desc={this.props.description}
            desc2={this.props.description2}
          />
          <hr />
        </List>
      </div>
    );
  }
}
