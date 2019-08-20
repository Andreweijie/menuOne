import React, { Component } from "react";
import { List, ListSubheader } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Category from "./Category";

class Menu extends Component {
  state = { current: undefined };

  changeOpen = idx => {
    this.setState({
      current: idx
    });
  };
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
    let secondDate;
    if (this.props.match.params.category == "daily-issue") {
      availDate = "Available daily except on";
      secondDate = "weekends before 5:00pm";
    } else {
      availDate = "Available on weekends from";
      secondDate = "10:30am - 3:30pm";
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
              <h4>{secondDate}</h4>
            </ListSubheader>
          }
        >
          <hr />
          {keys.map((e, index) => {
            return (
              <Category
                setOpen={() => {
                  if (this.state.current == index) {
                    this.setState({ current: undefined });
                  } else {
                    this.setState({ current: index });
                  }
                }}
                index={index}
                current={this.state.current}
                data={data[0][category][e]}
                title={e}
              />
            );
          })}
        </List>
      </div>
    );
  }
}

export default withRouter(Menu);
