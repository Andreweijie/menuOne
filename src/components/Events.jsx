import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { List } from "@material-ui/core";
import MenuItem from "./MenuItem";

class Events extends Component {
  state = {
    items: [
      {
        name: "Orange Butternut Soup",
        price: 14,
        description: "orange infused butternut, cinnamon, french baguette"
      },
      {
        name: "X'mas Fish Pie",
        price: 23,
        description:
          "haddock, clams, sweet leeks, prosecco sauce, mash potato, cheddar cheese"
      },
      {
        name: "Seafood Rice",
        price: "* 78",
        description:
          "shellfish, white fish, saffron, tomate, capsicum, prawn stock, white wine, long grain rice, parsley",
        description2: "for 3-4 persons"
      },
      {
        name: "Festive Meat Platter",
        price: "* 128",
        description:
          "charred short ribs, veal sausages, maple glazed pork ribs, kimchi, lettuce, roasted potato, sour cream",
        description2: "for 3-4 persons"
      },
      {
        name: "Eat, Drink and Be Merry",
        price: 295,
        description:
          "Seafood Rice + Festive Meat Platter + Perrier-Jouët Grand Brut",
        description2: "for 4-6 persons"
      }
    ]
  };

  render() {
    return (
      <div>
        <h3
          style={{ fontFamily: "Corona" }}
          id="back-home"
          onClick={this.props.history.goBack}
        >
          &lt; Christmas Special
        </h3>
        <h4 style={{ fontFamily: "Corona", fontSize: 14 }}>Available</h4>
        <hr />
        <img src={require("../images/christmas.jpg")} />
        <List component="nav" aria-labelledby="nested-list-subheader">
          <hr />
          {this.state.items.map(a => {
            return (
              <MenuItem
                name={a.name}
                price={a.price}
                description={a.description}
                description2={a.description2}
              />
            );
          })}
        </List>
        <h4>*Top up $99 for a Perrier-Jouët Grand Brut</h4>
      </div>
    );
  }
}

export default withRouter(Events);
