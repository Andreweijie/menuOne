import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MenuItem from "./MenuItem";

export default class Specials extends Component {
  state = {
    data: [
      {
        name: "CURED BEETROOT SALMON",
        price: 21,
        description: "White grapes, lemon gel, dill cream",
        image: "/images/cured-beetroot-salmon.JPG"
      },
      {
        name: "CURRY GRILLED GROUPER",
        price: 39,
        description:
          "grouper fillet, sambal lady’s finger and eggplant, signature curry veloute, jasmine rice",
        image: "/images/curry-grilled-grouper.JPG"
      },
      {
        name: "CHILEAN COD & TOFU LASAGNE",
        price: 42,
        description:
          "steamed cod & tofu, local greens, superior Hong Kong dressing, wolfberry",
        image: "/images/chilean-cod-tofu-lasagne.JPG"
      },
      {
        name: "ANGUS TENDERLOIN",
        price: 45,
        description:
          "220g tenderloin, spring vegetables, foie gras mousse, cherry griotte sauce, veal jus",
        image: "/images/angus-tenderloin.JPG"
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
          &lt; Specials
        </h3>
        <h4 style={{ fontFamily: "Corona" }}>
          Limited availability, please check with us!
        </h4>
        <hr />
        {this.state.data.map(e => {
          return (
            <MenuItem
              name={e.name}
              price={e.price}
              description={e.description}
              image={e.image}
            />
          );
        })}
      </div>
    );
  }
}
