import React, { Component } from "react";
import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class Menus extends Component {
  render() {
    return (
      <div className="menus">
        <span id="welcome">Welcome to</span>
        <h1 id="name">The Coastal Settlement</h1>
        <hr id="bottom3" />

        <List>
          <ListItem button>
            <Link to="/menu/daily-issue">DAILY ISSUE </Link>
            <span className="arrows" style={{ float: "right", fontSize: 30 }}>
              &gt;
            </span>
          </ListItem>
          <hr id="menu-divider" />
          <ListItem button>
            <Link to="/high-tea">HIGH TEA </Link>
            <span className="arrows" style={{ float: "right", fontSize: 30 }}>
              &gt;
            </span>
          </ListItem>
          <hr id="menu-divider" />
          <ListItem button>
            <Link to="/menu/weekend-issue">WEEKEND ISSUE </Link>
            <span className="arrows" style={{ float: "right", fontSize: 30 }}>
              &gt;
            </span>
          </ListItem>
          <hr id="menu-divider" />
          <ListItem button>
            <Link to="/breakfast">BREAKFAST </Link>
            <span className="arrows" style={{ float: "right", fontSize: 30 }}>
              &gt;
            </span>
          </ListItem>
          <hr id="menu-divider" />
          <ListItem button>
            <Link to="/liquid">LIQUID ISSUE </Link>
            <span className="arrows" style={{ float: "right", fontSize: 30 }}>
              &gt;
            </span>
          </ListItem>
          <hr id="menu-divider" />
          <ListItem button>
            <Link to="/specials">SPECIALS </Link>
            <span className="arrows" style={{ float: "right", fontSize: 30 }}>
              &gt;
            </span>
          </ListItem>
          <hr id="menu-divider" />
        </List>
      </div>
    );
  }
}
