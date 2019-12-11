import React, { Component } from "react";
import { List, ListSubheader } from "@material-ui/core";
import MenuItem from "./MenuItem";

export default class MiniMenu extends Component {
  render() {
    return (
      <div>
        {this.props.data.map(e => {
          return (
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <h3>{e.sub}</h3>
                </ListSubheader>
              }
            >
              <hr />
              {e.items.map(a => {
                return (
                  <MenuItem
                    name={a.name}
                    price={a.price}
                    description={a.description}
                    image={a.image}
                    description2={a.description2}
                  />
                );
              })}
            </List>
          );
        })}
      </div>
    );
  }
}
