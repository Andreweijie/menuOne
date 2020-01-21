import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { List } from "@material-ui/core";
import MenuItem from "./MenuItem";

class Events extends Component {
  state = {
    items: [
      {
        name: "Properity Yu Sheng",
        price: 68,
        description:
          "baby abalone, salmon sashimi, mesclun salad, cucumber ribbon, cherry tomato, carrot, cabbage, asparagus, fish skin, crackers, yuzu plum dressing"
      },
      {
        name: "Lamb Ribs",
        price: 38,
        description:
          "slow cooked crispy lamb ribs, asian spices, mixed peppers, mint yogurt dip"
      },
      {
        name: "Mala seafood Pot",
        price: "* 68",
        description:
          "baby abalone, prawns, scallops, mussels, braised shiitake mushroom, wood fungus, rice vermicelli"
      },
      {
        name: "CNY Meat Platter",
        price: "* 128",
        description:
          "charrgrilled short ribs, apple galzed cider baby back ribs, mentaiko mac & cheese, balsamic glazed arugula, sweet potato fries"
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
          &lt; CNY Special
        </h3>
        <img style={{ marginTop: 12 }} src="/images/banner.jpg"></img>

        <List component="nav" aria-labelledby="nested-list-subheader">
          <hr />
          {this.state.items.map(a => {
            return (
              <MenuItem
                name={a.name}
                price={a.price}
                description={a.description}
              />
            );
          })}
        </List>
        <h4>*Top up $99 for a Perrier-Jouët Grand Brut</h4>
        <h4>*Top up $109 for a Perrier-Jouët Blason Rosé</h4>
      </div>
    );
  }
}

export default withRouter(Events);
