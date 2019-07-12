import React, { Component } from "react";
import { List, ListSubheader } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Category from "./Category";

class Menu extends Component {
  render() {
    let category = this.props.match.params.category;
    let title = category.toUpperCase();
    title = title.split("-");
    title = title.join(" ");
    let data = this.props.data.filter(e => {
      return e.hasOwnProperty(category);
    });
    let obj = data[0][category];
    let keys = Object.keys(obj);
    let availDate;
    if (this.props.match.params.category == "daily-issue") {
      availDate = "Available daily except on weekends before 5pm";
    } else {
      availDate = "Available on weekends before from 1030am - 330pm";
    }
    return (
      <div>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              <h3 onClick={this.props.history.goBack}> &lt; {title}</h3>
              <h4>{availDate}</h4>
            </ListSubheader>
          }
        >
          <hr />
          {keys.map(e => {
            return <Category data={data[0][category][e]} title={e} />;
          })}
        </List>
      </div>
    );
  }
}

export default withRouter(Menu);
