import React, { Component } from "react";
import MenuItem from "./MenuItem";

export default class Breakfast extends Component {
  state = {
    Breakfast: [
      {
        name: "MUSHROOM SOUP & EGGS",
        description: "Soft boiled eggs, creamy mushroom soup, artisanal toast",
        image: "/images/mushroom-soup-eggs.jpg"
      },
      {
        name: "​SAUSAGE & EGGS",
        description:
          "Choice of chicken cheese sausage/smoked salmon Sunny side-up eggs, mesclun salad, sour cream, sour dough, jam",
        image: "/images/sausage-eggs.jpg"
      },
      {
        name: "SMASHED AVOCADO & EGGS",
        description:
          "SChoice of scrambled / sunny side-up Avocado, norwegian smoked salmon, artisanal toast, tomato salsa",
        image: "/images/smashed-advocado-and-eggs.jpg"
      },
      {
        name: "TRUFFLE EGGS & MUSHROOM",
        description:
          "Truffled scrambled eggs, creamed mushroom, arugula, parmesan cheese",
        image: "/images/truffle-eggs-mushroom.jpg"
      },
      {
        name: "HAM, CHEESE & TOMATO CROISSANT",
        description: "Ham, tomato, cheese, croissant, mesclun salad"
      }
    ]
  };
  render() {
    return (
      <div>
        <h3
          style={{ fontFamily: "Corona" }}
          onClick={this.props.history.goBack}
        >
          {" "}
          &lt; Breakfast
        </h3>
        <h4>Available on weekends and PH from 8:30am to 10:30am</h4>
        <hr />
        {this.state.Breakfast.map(e => {
          return (
            <MenuItem
              name={e.name}
              description={e.description}
              image={e.image}
            />
          );
        })}
      </div>
    );
  }
}
