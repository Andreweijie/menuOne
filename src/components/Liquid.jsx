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
          { name: "Kronenbourg Blanc - Pint 500ml", price: 14 },
          { name: "Kronenbourg Lager - Pint 500ml", price: 14 }
        ]
      },
      {
        sub: "BOTTLED BEER",
        items: [
          { name: "Carlsberg Green Label", price: "10/48" },
          { name: "Corona Extra", price: "10/48" },
          { name: "Heineken", price: "10/48" },
          { name: "Tiger", price: "10/48" },
          { name: "Suntory Premium Malt", price: "15/ -" },
          { name: "Guinness Draught (Canned)", price: "15/ -" }
        ]
      },
      {
        sub: "CIDERS",
        items: [
          { name: "Somersby Cider (Apple | Pear)", price: "10/48" },
          {
            name: "Strongbow Cider (Elderflower | Dark Fruits)",
            price: "10/48"
          }
        ]
      }
    ]
  },
  {
    category: "Wines",
    items: [
      {
        sub: "FRANCE",
        items: [
          {
            name: "Rive Gauche Colombard Chardonnay",
            description: "Langeudoc | 2016 | 11% VOL",
            price: 55
          },
          {
            name: "Domaine Christian Moreau Chablis",
            description: "Burgundy | 2015 | 12.5% VOL",
            price: 105
          },
          {
            name: "Rive Gauche Merlot",
            description: "Langeudoc | 2016 | 12.5% VOL | Medium",
            price: 55
          },
          {
            name: "Vidal Fleury Cotes Du Rhone Rouge",
            description: "Rhone | 2015 | 14% VOL | WA87 | Medium",
            price: 95
          },
          {
            name: "Lupe Cholet Bourgogne Hautes-Côtes de Beaune",
            description: "Burgundy | 2014 | 14% VOL | Light",
            price: 105
          },
          {
            name: "Vidal Fleury Châteauneuf du Pape Rouge",
            description: "Rhone | 2013 | 14.5% VOL | WA89 | Medium - Full",
            price: 150
          },
          {
            name: "Château Chapelle d’Aliénor",
            description:
              "Bordeaux Supérieur | 2015 | 14% VOL | WE90 | Medium - Full",
            price: 165
          }
        ]
      },
      {
        sub: "PORTUGAL",
        items: [
          {
            name: "Herdade São Miguel Colheita Seleccionada Branco",
            description: "Alentejo | 2016 | 12.5% VOL",
            price: 75
          },
          {
            name: "Herdade da Pimenta Preta",
            description: "Portugal | 2015 | 14% VOL | JS90 | Full",
            price: "13/60"
          },
          {
            name: "Herdade da Pimenta Single Estate",
            description: "Alentejo | 2014 | 14% VOL | WS90 | Full",
            price: 95
          },
          {
            name: "Herdade da Pimenta Grande Escolha",
            description: "Alentejo | 2014 | 14.5% VOL | WE93 | Full",
            price: 135
          }
        ]
      },
      {
        sub: "ITALY",
        items: [
          {
            name: "Ceretto Moscato d'Asti DOCG (Sweet Wine)",
            description: "Piedmont | 2016 | 5.5% VOL",
            price: 65
          },
          {
            name: "Casa Lunardi Pinot Grigio",
            description: "Veneto | 2016 | 12% VOL",
            price: 70
          },
          {
            name: "Castelforte Valpolicella Superiore DOC",
            description: "Veneto | 2014 | 13% VOL | Medium",
            price: 70
          },
          {
            name: "Castelforte Amarone della Valpolicella DOC",
            description: "Veneto | 2013 | 15% VOL | Full",
            price: 150
          }
        ]
      },
      {
        sub: "AUSTRALIA",
        items: [
          {
            name: "McWilliam's Inheritance Chardonnay",
            description: "New South Wales | 2017 | 13% VOL",
            price: "14/65"
          },
          {
            name: "Petersons Semillon",
            description: "Hunter Valley | 2018 | Alc: 11.3% VOL",
            price: 75
          },
          {
            name: "Mount Pleasant Elizabeth Semillon",
            description: "Hunter Valley | 2016 | 10% VOL | JH90",
            price: 90
          },
          {
            name: "McWilliam’s Inheritance Merlot",
            description: "New South Wales | 2016 | 13.5% VOL",
            price: "14/65"
          },
          {
            name: "Petersons Shiraz Cabernet",
            description: "Mudgee | 2015 | 14.8% VOL | Full",
            price: 65
          },
          {
            name: "Mount Pleasant Philip Shiraz",
            description: "Hunter Valley | 2015 | 13.5% VOL | JH93 | Medium",
            price: 95
          }
        ]
      },
      {
        sub: "NEW ZEALAND",
        items: [
          {
            name: "Yealands Estate Land Made Sauvignon Blanc",
            description: "New Zealand | 2016 | 13.5% VOL",
            price: "13/60"
          },
          {
            name: "Cloudy Bay Sauvignon Blanc",
            description: "Malborough | 2016 | 13.5% VOL | JS90",
            price: 95
          },
          {
            name: "Yealands Estate Single Vineyard P.G.R",
            description: "Marlborough | 2016 | 13% VOL",
            price: 85
          },
          {
            name: "Yealands Estate Single Vineyard Pinot Noir",
            description: "Marlborough | 2014 | 13.5% VOL | Medium",
            price: 105
          },
          {
            name: "Cloudy Bay Pinot Noir",
            description: "Marlborough | 2014 | 13.5% VOL | Medium",
            price: 145
          }
        ]
      },
      {
        sub: "ARGENTINA",
        items: [
          {
            name: "Terrazas Reserva Chardonnay",
            description: "Mendoza | 2016 | 14.5% VOL",
            price: 65
          },
          {
            name: "Terrazas Reserva Malbec",
            description: "Mendoza | 2016 | 14.5% VOL | Full",
            price: 65
          }
        ]
      },
      {
        sub: "USA",
        items: [
          {
            name: "Fetzer Sundial Chardonnay",
            description: "California | 2015 | 13% VOL",
            price: 85
          },
          {
            name: "Fetzer Valley Oaks Zinfandel",
            description: "California | 2015 | 13.5% VOL | Medium",
            price: 85
          },
          {
            name: "Joseph Phelps Cabernet Sauvignon",
            description: "Napa Valley | 2014 | 13.5% VOL | Full",
            price: 220
          }
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
          { name: "Gin (Beefeater)", price: "10" },
          { name: "Vodka (Absolut Blue)", price: "10" },
          { name: "Rum (Havana Club 3 Years)", price: "10" },
          { name: "Tequila (Olmeca)", price: "10" },
          { name: "Bourbon (Jim Beam)", price: "10" },
          { name: "Whisky (Ballantine’s)", price: "10" }
        ]
      },
      {
        sub: "SINGLE MALT WHISKEY",
        items: [
          { name: "The Glenlivet Founder’s Reserve", price: "10/160" },
          { name: "The Glenlivet 15 Years", price: "12/180" },
          { name: "The Glenlivet 18 Years", price: "18/280" },
          { name: "The Dalmore 12 Years", price: "12/180" },
          { name: "The Dalmore 15 Years", price: "14/220" },
          { name: "The Macallan 12 Years", price: "12/180" },
          { name: "Glenmorangie Nectar d’Or", price: "12/180" },
          { name: "Hakushu Distiller’s Reserve", price: "14/220" }
        ]
      },
      {
        sub: "BLENDED WHISKEY",
        items: [
          { name: "Ballantine’s", price: "10/150" },
          { name: "Chivas Regal 12 Years", price: "12/180" },
          { name: "Chivas Regal 18 Years", price: "15/250" },
          { name: "Johnnie Walker Black Label", price: "10/150" },
          { name: "Johnnie Walker Gold Reserve", price: "12/180" }
        ]
      },
      {
        sub: "BOURBON",
        items: [
          { name: "Jim Beam", price: "10/150" },
          { name: "Maker’s Mark", price: "12/180" }
        ]
      },
      {
        sub: "COGNAC",
        items: [
          { name: "Martell V.S.O.P", price: "12/180" },
          { name: "Martell Cordon Bleu", price: "12/180" },
          { name: "Hennessy X.O", price: "-/480" }
        ]
      },
      {
        sub: "RUM",
        items: [
          { name: "Havana Club 3 Years", price: "10/150" },
          { name: "Havana Club 7 Years", price: "12/180" }
        ]
      },
      {
        sub: "VODKA",
        items: [
          { name: "Absolut Blue", price: "10/150" },
          { name: "Absolut Elyx", price: "12/180" },
          { name: "Belvedere", price: "14/220" }
        ]
      },
      {
        sub: "GIN",
        items: [
          { name: "Beefeater", price: "10/150" },
          { name: "Bombay Sapphire", price: "12/180" },
          { name: "Hendrick’s", price: "14/220" },
          { name: "Monkey 47", price: "14/220" }
        ]
      },
      {
        sub: "TEQUILA",
        items: [
          { name: "Olmeca Tequila", price: "10/150" },
          { name: "Patrón XO Cafe", price: "12/180" },
          { name: "Patrón Reposado", price: "14/220" },
          { name: "Patrón Añejo", price: "18/280" }
        ]
      },
      {
        sub: "APERITIF & LIQUEUR",
        items: [
          { name: "Bailey’s Irish Cream", price: "10" },
          { name: "Campari", price: "10" },
          { name: "Cointreau", price: "10" },
          { name: "Jägermeister", price: "10" },
          { name: "Kahlua", price: "10" }
        ]
      },
      {
        sub: "BUBBLY",
        items: [
          { name: "Riondo Sesto Senso Prosecco Extra Dry", price: "12/60" },
          { name: "Café de Paris Lychee", price: "14/65" },
          { name: "Perrier Jouët Grand Brut", price: "25/118" },
          { name: "Dom Pérignon Vintage", price: "-/350" }
        ]
      }
    ]
  },
  {
    category: "Cocktails",
    items: [
      {
        sub: "COCKTAILS",
        items: [
          {
            name: "Coastal Mojito",
            description:
              "Raspberry Vodka, Strawberry Puree, Orange Juice, Cranberry Juice, Mint Leaves, Fresh Raspberry",
            price: 15
          },
          {
            name: "Sparkling Lychee Mojito",
            description: "Sparkling Lychee Wine, Lychee Syrup, Mint Leaves",
            price: 15
          },
          {
            name: "Lychee Mojito",
            description: "Vodka, Lychee Liqueur, Mint Leaves, Lychee Fruit",
            price: 15
          },
          {
            name: "Changi Sling",
            description:
              "Gin, Cherry Brandy, Triple Sec, Orange Juice, Benedictine DOM, Grenadine, Pineapple Juice",
            price: 15
          },
          {
            name: "Long Island Tea",
            description:
              "Gin, Vodka, Rum, Tequila, Triple Sec, Lime Juice, Coke",
            price: 16
          },
          {
            name: "Martini",
            description:
              "Classic Dry | Dirty | Lychee | Cosmopolitan | Espresso",
            price: 15
          },
          {
            name: "Mimosa",
            description: "Prosecco & Fresh Orange Juice",
            price: 18,
            image: "/images/mimosa.JPG"
          },
          {
            name: "Bloody Mary",
            description:
              "Worcestershire Sauce, Vodka, Tomato Juice, Tabasco Sauce, Celery Stalk",
            price: 18,
            image: "/images/bloody-mary.jpg"
          },
          {
            name: "Whisky Sour",
            description:
              "Single Malt Whisky, Sour Mix, Freshly Squeezed Lemon Juice, Egg White, Orange Peel",
            price: 18,
            image: "/images/whiskey-sour.jpg"
          },
          {
            name: "Purple Sapphire",
            description:
              "Blackcurrant Jam, Bombay Sapphire Gin, Vanilla Syrup, Freshly Squeezed Lemon Juice",
            price: 18,
            image: "/images/purple-sapphire.jpg"
          },
          {
            name: "Strawberry Rumfee",
            description:
              "Espresso, Strawberry Yoghurt, Strawberry Jam, Rum, Strawberry",
            price: 18,
            image: "/images/strawberry-rumfee.jpg"
          },
          {
            name: "Pina Colada",
            description: "Rum, Pineapple Juice, Coconut Cream, Pineapple Wedge",
            price: 18,
            image: "/images/pina-colada.jpg"
          },
          {
            name: "Sangria (Red)",
            description:
              "Cognac, Triple Sec, Simple Syrup, Orange Juice, Red Wine, Soda",
            price: 18,
            image: "/images/sangria.jpg"
          },
          {
            name: "Sangria (White)",
            description:
              "Cognac, Triple Sec, Simple Syrup, Orange Juice, White Wine, Soda",
            price: 18,
            image: "/images/sangria.jpg"
          }
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
          { name: "Chocolate w/ Marshmallow", price: "6/7" },
          { name: "Milo", price: "5/6" },
          { name: "Milo Dinosaur", price: "7" },
          { name: "Horlicks", price: "5/6" },
          { name: "Homemade Lemon Barley", price: "6/7" },
          { name: "Homemade Iced Lemon Tea", price: "6" },
          { name: "Bandung", price: "6" }
        ]
      },
      {
        sub: "NON-ALCOHOLIC MIXES",
        items: [
          {
            name: "Mojito Delight",
            description: "Mint, Lime Juice, Fresh Lime",
            description2: "Original | Lychee | Apple",
            price: 12
          },
          {
            name: "Shirley Temple",
            description: "Lime Juice, Sprite, Grenadine Syrup",
            price: 12
          },
          {
            name: "Cucumber Lemonade",
            description: "Sprite, Cucumber Syrup, Mint, Lime Juice",
            price: 12
          },
          {
            name: "Governor’s Smile",
            description: "Orange Juice, Milk, Honey",
            price: 12
          },
          {
            name: "Atomic Melon",
            description: "Rock Melon & Lychee Syrup",
            price: 12
          },
          {
            name: "Green Energy",
            description: "Green Apple, Cucumber, Celery",
            price: 12
          },
          {
            name: "Red Castle",
            description: "Raspberry, Lychee, Lychee Syrup",
            price: 12
          },
          {
            name: "TCS Therapy",
            description: "Green Apple, Rock Melon, Watermelon",
            price: 12
          },
          {
            name: "Traffic Light",
            description: "Red Apple, Orange, Green Apple",
            price: 12
          },
          {
            name: "Fresh Juice",
            description: "Select up to any 2:",
            description2:
              "Carrot | Celery | Cucumber | Green/Red Apple | Orange | Rock Melon | Watermelon",
            price: 9
          }
        ]
      },
      {
        sub: "MILKSHAKES",
        items: [
          {
            name:
              "Chocolate | Chocolate Mint | Horlicks | Milo | Peanut Butter | Strawberry | Banana | Vanilla",
            price: 8
          },
          {
            name:
              "Chocolate Banana | Oreo | Salted Caramel | Strawberry Banana",
            price: 9
          }
        ]
      },
      {
        sub: "COFFEE",
        items: [
          {
            name: "Espresso | Long Black",
            price: "5/6"
          },
          {
            name: "Latte | Cappuccino | Flat White | Macchiato | Mocha",
            description:
              "*Extra shot of Espresso +$1 | Vanilla, Hazelnut, Toffee Nut +$1",
            price: "6/7"
          },
          {
            name: "Affogato",
            price: "8"
          }
        ]
      },
      {
        sub: "POT OF TEA",
        items: [
          {
            name:
              "Earl Grey Classic | Green Tea | Peppermint | Roman Chamomile | Special Breakfast",
            description: "*one complimentary refill",
            price: "8/9"
          }
        ]
      },
      {
        sub: "SOFT DRINKS",
        items: [
          {
            name: "Coke | Sprite | Soda",
            price: 5
          },
          {
            name:
              "Bitter Lemon | Coke Light | Tonic | Ginger Beer | Root Beer | Ginger Ale",
            price: 6
          },
          {
            name: "Red Bull Silver",
            price: 8
          }
        ]
      },
      {
        sub: "BOTTLED JUICES",
        items: [
          {
            name: "Cranberry | Lime | Mango | Orange | Pineapple | Tomato",
            price: 6
          }
        ]
      },
      {
        sub: "WATER",
        items: [
          { name: "Sparkling Water (Smeraldina 500ml)", price: 4 },
          { name: "Still Water (Fiji 500ml)", price: 4 }
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
