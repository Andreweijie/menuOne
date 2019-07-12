import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import MiniMenu from "./MiniMenu";
import { withRouter } from "react-router-dom";

const drinks = [
  {
    category: "Beers and Ciders",
    items: [
      {
        sub: "DRAUGHT BEER",
        items: [
          { name: "Kronenbourg Blanc - Pint 500ml Kronenbourg" },
          { name: "Lager - Pint 500ml" }
        ]
      },
      {
        sub: "BOTTLED BEER",
        items: [
          { name: "Carlsberg Green Label" },
          { name: "Corona Extra" },
          { name: "Heineken" },
          { name: "Tiger" },
          { name: "Suntory Premium Malt" },
          { name: "Guinness Draught (Canned)" }
        ]
      },
      {
        sub: "CIDERS",
        items: [
          { name: "Somersby Cider (Apple | Pear)" },
          { name: "Strongbow Cider (Elderflower | Dark Fruits)" }
        ]
      }
    ]
  },
  {
    category: "Wines",
    items: [
      {
        sub: "HOUSE WINES",
        items: [
          { name: "McWilliam's Inheritance Chardonnay" },
          { name: "Yealands Estate Land Made Sauvignon Blanc" },
          { name: "McWilliam’s Inheritance Merlot" },
          { name: "Herdade da Pimenta Preta" }
        ]
      },
      {
        sub: "PORTUGAL",
        items: [
          { name: "Herdade São Miguel Colheita Seleccionada Branco" },
          { name: "Herdade da Pimenta Single Estate" },
          { name: "Herdade da Pimenta Grande Escolha" }
        ]
      },
      {
        sub: "ITALY",
        items: [
          { name: "Casa Lunardi Pinot Grigio" },
          { name: "Ceretto Moscato d'Asti DOCG (Sweet Wine)" },
          { name: "Castelforte Valpolicella Superiore DOC" },
          { name: "Poggio Scalette Chianti Classico" },
          { name: "Castelforte Amarone della Valpolicella DOC" }
        ]
      },
      {
        sub: "ARGENTINA",
        items: [
          { name: "Terrazas Reserva Chardonnay" },
          { name: "Terrazas Reserva Malbec" }
        ]
      },
      {
        sub: "USA",
        items: [
          { name: "Fetzer Sundial Chardonnay" },
          { name: "Fetzer Valley Oaks Zinfandel" },
          { name: "Joseph Phelps Cabernet Sauvignon" }
        ]
      },
      {
        sub: "FRANCE",
        items: [
          { name: "Rive Gauche Colombard Chardonnay" },
          { name: "Domaine Christian Moreau Chablis" },
          { name: "Rive Gauche Merlot" },
          { name: "Vidal Fleury Cotes Du Rhone Rouge" },
          { name: "Château La Croix La Bastienne" },
          { name: "Lupe Cholet Bourgogne Hautes-Côtes de Beaune" },
          { name: "Vidal Fleury Châteauneuf du Pape Rouge" },
          { name: "Château Chapelle d’Aliénor" }
        ]
      },
      {
        sub: "AUSTRALIA",
        items: [
          { name: "Elderton E Series Chardonnay" },
          { name: "Mount Pleasant Elizabeth Semillon" },
          { name: "Elderton E Series Shiraz Cabernet" },
          { name: "Mount Pleasant Philip Shiraz" }
        ]
      },
      {
        sub: "NEW ZEALAND",
        items: [
          { name: "Saint Clair Riesling" },
          { name: "Cloudy Bay Sauvignon Blanc" },
          { name: "Yealands Estate Single Vineyard P.G.R" },
          { name: "Saint Clair Premium Cabernet Merlot" },
          { name: "Yealands Estate Single Vineyard Pinot Noir" },
          { name: "Cloudy Bay Pinot Noir" }
        ]
      }
    ]
  },
  {
    category: "Spirits",
    items: [
      {
        sub: "HOUSE POUR SPIRITS",
        items: [
          { name: "Gin (Beefeater)" },
          { name: "Vodka (Absolut Blue)" },
          { name: "Rum (Havana Club 3 Years)" },
          { name: "Tequila (Olmeca)" },
          { name: "Bourbon (Jim Beam)" },
          { name: "Whisky (Ballantine’s)" }
        ]
      },
      {
        sub: "SINGLE MALT WHISKEY",
        items: [
          { name: "The Glenlivet Founder’s Reserve" },
          { name: "The Glenlivet 15 Years" },
          { name: "The Glenlivet 18 Years" },
          { name: "The Dalmore 12 Years" },
          { name: "The Dalmore 15 Years" },
          { name: "The Macallan 12 Years" },
          { name: "Glenmorangie Nectar d’Or" },
          { name: "Hakushu Distiller’s Reserve" }
        ]
      },
      {
        sub: "BLENDED WHISKEY",
        items: [
          { name: "Ballantine’s" },
          { name: "Chivas Regal 12 Years" },
          { name: "Chivas Regal 18 Years" },
          { name: "Johnnie Walker Black Label" },
          { name: "Johnnie Walker Gold Reserve" }
        ]
      },
      {
        sub: "BOURBON",
        items: [{ name: "Jim Beam" }, { name: "Maker’s Mark" }]
      },
      {
        sub: "COGNAC",
        items: [
          { name: "Martell V.S.O.P" },
          { name: "Martell Cordon Bleu" },
          { name: "Hennessy X.O" }
        ]
      },
      {
        sub: "RUM",
        items: [
          { name: "Havana Club 3 Years" },
          { name: "Havana Club 7 Years" }
        ]
      },
      {
        sub: "VODKA",
        items: [
          { name: "Absolut Blue" },
          { name: "Absolut Elyx" },
          { name: "Belvedere" }
        ]
      },
      {
        sub: "GIN",
        items: [
          { name: "Beefeater" },
          { name: "Bombay Sapphire" },
          { name: "Hendrick’s" },
          { name: "Monkey" }
        ]
      },
      {
        sub: "TEQUILA",
        items: [
          { name: "Olmeca Tequila" },
          { name: "Patrón XO Cafe" },
          { name: "Patrón Reposado" },
          { name: "Patrón Añejo" }
        ]
      },
      {
        sub: "APERITIF & LIQUEUR",
        items: [
          { name: "Bailey’s Irish Cream" },
          { name: "Campari" },
          { name: "Cointreau" },
          { name: "Jägermeister" },
          { name: "Kahlua" }
        ]
      },
      {
        sub: "BUBBLY",
        items: [
          { name: "Riondo Sesto Senso Prosecco Extra Dry" },
          { name: "Café de Paris Lychee" },
          { name: "Perrier Jouët Grand Brut" },
          { name: "Dom Pérignon Vintage" }
        ]
      }
    ]
  },
  {
    category: "Cocktails",
    items: [
      {
        sub: "Cocktails",
        items: [
          { name: "Coastal Mojito" },
          { name: "Sparkling Lychee Mojito" },
          { name: "Lychee Mojito" },
          { name: "Changi Sling" },
          { name: "Long Island Tea" },
          { name: "TCS Spritzer" },
          { name: "Martini" },
          { name: "Mimosa" }
        ]
      }
    ]
  },
  {
    category: "Non-Alcoholic",
    items: [
      {
        sub: "LOCAL CLASSICS",
        items: [
          { name: "Chocolate w/ Marshmallow" },
          { name: "Milo" },
          { name: "Milo Dinosaur" },
          { name: "Horlicks" },
          { name: "Homemade Lemon Barley" },
          { name: "Homemade Iced Lemon Tea" },
          { name: "Bandung" }
        ]
      },
      {
        sub: "NON-ALCOHOLIC MIXES",
        items: [
          { name: "Mojito Delight" },
          { name: "Shirley Temple" },
          { name: "Cucumber Lemonade" },
          { name: "Governor’s Smile" },
          { name: "Atomic Melon" },
          { name: "Green Energy" },
          { name: "Red Castle" },
          { name: "TCS Therapy" },
          { name: "Traffic Light" }
        ]
      },
      {
        sub: "MILKSHAKES",
        items: [
          {
            name:
              "Chocolate | Chocolate Mint | Horlicks | Milo | Peanut Butter | Strawberry | Banana | Vanilla | Chocolate Banana | Oreo | Salted Caramel | Strawberry Banana"
          }
        ]
      },
      {
        sub: "COFFEE",
        items: [
          {
            name:
              "Espresso | Long Black | Latte | Cappuccino | Flat White | Macchiato | Mocha | Affogato"
          }
        ]
      },
      {
        sub: "POT OF TEA",
        items: [
          {
            name:
              "Earl Grey Classic | Green Tea | Peppermint | Roman Chamomile | Special Breakfast"
          }
        ]
      },
      {
        sub: "SOFT DRINKS",
        items: [
          {
            name:
              "Coke | Sprite | Soda| Bitter Lemon | Coke Light | Tonic | Ginger Beer | Root Beer | Ginger Ale | Red Bull Silver"
          }
        ]
      },
      {
        sub: "BOTTLED JUICES",
        items: [
          {
            name: "Cranberry | Lime | Mango | Orange | Pineapple | Tomato"
          }
        ]
      },
      {
        sub: "WATER",
        items: [
          { name: "Sparkling Water (Gerolsteiner 500ml)" },
          { name: "Still Water (Fiji 500ml)" }
        ]
      }
    ]
  }
];

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

function Liquid(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <h3 id="back-home" onClick={props.history.goBack}>
        &lt; Liquid Issue
      </h3>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {drinks.map(e => {
            return <Tab label={e.category} />;
          })}
        </Tabs>
      </AppBar>
      {drinks.map((e, i) => {
        return value === i && <MiniMenu data={e.items} />;
      })}
    </div>
  );
}

export default withRouter(Liquid);
