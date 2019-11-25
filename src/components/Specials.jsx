import React, { Component } from "react";
import MenuItem from "./MenuItem";

export default class Specials extends Component {
  state = {
    data: [
      /*{
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
      }*/
      {
        name: "GIN - BOMBAY SAPPHIRE PROMO",
        price: 9,
        description: "Per glass",
        image: "/images/bombay-sapphire.jpg"
      },
      {
        name: "BEER - DOUBLE CHEERS KRONENBOURG",
        price: 22,
        description: "Per 2 pints",
        image: "/images/double-cheers.jpg"
      },
      {
        name: "RED WINE",
        price: "",
        description:
          "Approach any of our friendly staff to find out about our red wine deals!",
        image: "/images/red-wine.jpg"
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
        <h4 style={{ fontFamily: "Corona", fontSize: 14 }}>
          Limited availability, please check with us! <br></br>
          Approach any of our friendly staff to find out about our red wine
          deals!
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
