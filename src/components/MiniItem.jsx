import React, { Component } from "react";

import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";

export default class MiniItem extends Component {
  render() {
    return (
      <div>
        <List component="div" disablePadding>
          <ListItem button>
            <div id="menubox">
              <div id="itembox">
                <p className="item">{this.props.name}</p>
                <span>{this.props.price}</span>
              </div>

              <p className="desc">{this.props.desc}</p>
              {this.props.desc2 ? (
                <p className="desc">{this.props.desc2}</p>
              ) : null}
            </div>
          </ListItem>
        </List>
      </div>
    );
  }
}
