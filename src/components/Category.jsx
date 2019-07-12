import React, { Component } from "react";
import { ListItem, ListItemText, Collapse } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import MenuItem from "./MenuItem";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <ListItemText className="test" primary={this.props.title} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        {this.props.data.map((e, i) => {
          return (
            <Collapse
              key={e.name}
              in={this.state.open}
              timeout="auto"
              unmountOnExit
            >
              <MenuItem
                name={e.name}
                price={e.price}
                description={e.description}
                image={e.image}
                index={i}
                description2={e.description2}
              />
            </Collapse>
          );
        })}
      </div>
    );
  }
}
